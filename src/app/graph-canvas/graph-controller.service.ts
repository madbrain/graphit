import { Injectable } from '@angular/core';
import { PartialObserver } from 'rxjs';
import { Point } from '../geometry';
import { GraphNode, GraphEdge } from '../graphlayout';

export interface GhostNode {
  moveTo(position: Point): void;
  remove(): void;
}

export interface GhostLine {
  moveEnd(to: Point): void;
  remove(): void;
}

export interface DrawContext {
  findNode(point: Point): GraphNode;
  findEdge(point: Point): GraphEdge;
  resolveNode(node: GraphNode): GraphNode;

  selectionObserver: PartialObserver<GraphNode>;
  removeTools(): void;
  displayTool(tool: Tool): void;
  nodesClass(name: string, func: (node: GraphNode) => boolean): void;
  edgesClass(name: string, func: (edge: GraphEdge) => boolean): void;
  displayGhostNode(node: GraphNode): GhostNode;
  displayGhostLine(from: Point, to: Point): GhostLine;

  connect(from: GraphNode, to: GraphNode): void;
  swap(node: GraphNode, other: GraphNode): void;
  removeNode(node: GraphNode): void;
  removeEdge(edge: GraphEdge): void;
}

export interface State {
  mouseDown(point: Point): State;
  mouseUp(point: Point): State;
  mouseMove(point: Point): State;
}

export interface Tool {
  imgURL: string;
  state: (location: Point) => State;

  origin?: Point;
}

class Context {
  public tools: Array<Tool> = [];
  public nodeSelection: GraphNode;
  public edgeSelection: GraphEdge;

  constructor(public drawContext: DrawContext) { }

  clearSelection() {
    this.eraseTools();
    this.tools = [];
    this.nodeSelection = null;
    this.edgeSelection = null;
    this.drawContext.nodesClass("node-selected", d => false);
    this.drawContext.edgesClass("edge-selected", d => false);
    this.drawContext.selectionObserver.next(null);
  }

  selectNode(node: GraphNode) {
    this.edgeSelection = null;
    this.nodeSelection = this.drawContext.resolveNode(node);
    this.drawContext.nodesClass("node-selected", d => d == this.nodeSelection);
    this.drawContext.edgesClass("edge-selected", d => false);
    this.drawContext.selectionObserver.next(this.nodeSelection);

    this.tools = [
      { imgURL: "assets/connect.png", state: (point: Point) => new ConnectNodesState(this, point) },
      { imgURL: "assets/remove.png", state: (point: Point) => new RemoveNodeState(this) }
    ];
    this.placeTools(this.nodeSelection.bounds.getMaxX() + 10, this.nodeSelection.bounds.y, this.tools);
  }

  selectEdge(edge: GraphEdge) {
    this.nodeSelection = null;
    this.edgeSelection = edge;
    this.drawContext.edgesClass("edge-selected", d => d == edge);
    this.drawContext.nodesClass("node-selected", d => false);
    this.tools = [
      { imgURL: "assets/remove.png", state: (point: Point) => new RemoveEdgeState(this) }
    ];
    const fromPoint = edge.getPoints()[0];
    this.placeTools(fromPoint.x + 10, fromPoint.y + 10, this.tools);
  }

  eraseTools() {
    this.drawContext.removeTools();
  }

  findTool(point: Point) {
    return this.tools.find(tool => tool.origin.rect(20, 20).contains(point));
  }

  private placeTools(x: number, y: number, tools: Array<Tool>) {
    this.tools.forEach(tool => {
      tool.origin = new Point(x, y);
      y += 25;
    });
    this.eraseTools();

    // create tools visual
    this.tools.forEach(tool => {
      this.drawContext.displayTool(tool);
    });
  }

  findSwapCandidates(node: GraphNode) {
    const candidateNodes = [];
    //const edges = this.svgContext.graphLayout.workGraph.getIncomings(node);
    //if (edges.length == 0) {
    //  this.svgContext.graphLayout.ranks[0].nodes.forEach(n => {
    //    if (n != node) {
    //      candidateNodes.push(n);
    //    }
    //  });
    //}
    return candidateNodes;
  }
}

class IdleState implements State {
  constructor(private context: Context) { }
  mouseDown(point: Point) {
    const selectedTool = this.context.findTool(point);
    if (selectedTool != null) {
      this.context.eraseTools();
      return selectedTool.state(point);
    }

    const selectedNode = this.context.drawContext.findNode(point);
    if (selectedNode != null) {
      return new NodeDragStartState(this.context, selectedNode);
    }

    const selectedEdge = this.context.drawContext.findEdge(point);
    if (selectedEdge != null) {
      return new EdgeDragStartState(this.context, selectedEdge);
    }
    this.context.clearSelection();
    return this;
  };

  mouseMove(point: Point) {
    return this;
  }

  mouseUp(point: Point) {
    return this;
  }
}

class NodeDragStartState {
  constructor(private context: Context, private node: GraphNode) { }

  mouseDown(point: Point) {
    return this;
  }

  mouseMove(point: Point) {
    return new NodeDragState(this.context, this.node, point);
  }

  mouseUp(point: Point) {
    this.context.selectNode(this.node);
    return new IdleState(this.context);
  }
}

class NodeDragState implements State {

  private candidateNodes: Array<GraphNode>;
  private candidate: GraphNode;
  private offset: any;
  private ghost: GhostNode;

  constructor(private context: Context, private node: GraphNode, point: Point) {
    this.node = node;
    this.context.clearSelection();
    this.candidateNodes = this.context.findSwapCandidates(node);
    this.ghost = this.context.drawContext.displayGhostNode(node);
    this.offset = { dx: point.x - node.bounds.x, dy: point.y - node.bounds.y };
    this.context.drawContext.nodesClass("node-highlight", d => d == node || this.candidateNodes.indexOf(d) >= 0);
  }
  mouseDown(point: Point) {
    return this;
  }

  mouseMove(point: Point) {
    this.ghost.moveTo(new Point(point.x - this.offset.dx, point.y - this.offset.dy));
    this.candidate = this.candidateNodes.find(d => d.bounds.contains(point));
    this.context.drawContext.nodesClass("node-highlight", d =>
      d == this.node || this.candidateNodes.indexOf(d) >= 0 && d != this.candidate);
    this.context.drawContext.nodesClass("node-selected", d => d == this.candidate);
    return this;
  };

  mouseUp(point: Point) {
    this.ghost.remove();
    this.context.drawContext.nodesClass("node-highlight", d => false);
    if (this.candidate != null) {
      this.context.drawContext.swap(this.node, this.candidate);
    }
    this.context.selectNode(this.node);
    return new IdleState(this.context);
  }
}

class EdgeDragStartState implements State {
  constructor(private context: Context, private edge: GraphEdge) { }

  mouseDown(point: Point) {
    return this;
  }

  mouseMove(point: Point) {
    return this;
  }

  mouseUp(point: Point) {
    this.context.selectEdge(this.edge);
    return new IdleState(this.context);
  }
}

class ConnectNodesState implements State {
  private pendingLine: GhostLine;
  private destinationNode: GraphNode;

  constructor(private context: Context, point: Point) {
    this.pendingLine = this.context.drawContext.displayGhostLine(
      new Point(
        this.context.nodeSelection.bounds.x + this.context.nodeSelection.bounds.width / 2,
        this.context.nodeSelection.bounds.y + this.context.nodeSelection.bounds.height / 2),
      point
    );
  }

  mouseDown(point: Point) {
    return this;
  }

  mouseMove(point: Point) {
    this.pendingLine.moveEnd(point);
    this.destinationNode = this.context.drawContext.findNode(point);
    this.context.drawContext.nodesClass("node-highlight", d => d == this.destinationNode);
    return this;
  };

  mouseUp(point: Point) {
    this.pendingLine.remove();
    this.context.drawContext.nodesClass("node-highlight", d => false);
    if (this.destinationNode != null && this.destinationNode != this.context.nodeSelection) {
      this.context.drawContext.connect(this.context.nodeSelection, this.destinationNode);
    }
    this.context.selectNode(this.context.nodeSelection);
    return new IdleState(this.context);
  }
}

class RemoveNodeState implements State {
  constructor(private context: Context) { }

  mouseDown(point: Point) {
    return this;
  };

  mouseMove(point: Point) {
    return this;
  };

  mouseUp(point: Point) {
    this.context.drawContext.removeNode(this.context.nodeSelection);
    this.context.clearSelection();
    return new IdleState(this.context);
  }
}

class RemoveEdgeState implements State {
  constructor(private context: Context) { }

  mouseDown(point: Point) {
    return this;
  }

  mouseMove(point: Point) {
    return this;
  }

  mouseUp(point: Point) {
    this.context.drawContext.removeEdge(this.context.edgeSelection);
    this.context.clearSelection();
    return new IdleState(this.context);
  }
}

@Injectable({
  providedIn: 'root'
})
export class GraphControllerService {

  constructor() { }

  create(drawContext: DrawContext): State {
    return new IdleState(new Context(drawContext));
  }
}
