import { Component, OnInit, ViewEncapsulation, Output, Input } from '@angular/core';
import { Observable, Subject, PartialObserver } from 'rxjs';
import { map } from 'rxjs/operators';
import { Graph, Edge } from '../graph';
import { GraphLayout, SizeProvider, GraphNode, GraphEdge } from '../graphlayout';
import { Point, Rectangle } from '../geometry';
import { GraphControllerService, State, DrawContext, Tool, GhostNode, GhostLine } from './graph-controller.service';
import { GraphDocument, GraphSpec, NodeSpec } from '../graphDocument';
import { toPoint, edgeLine } from './svg-utils';

//import * as Snap from 'snapsvg';

/// <reference path="../../../node_modules/@types/snapsvg/index.d.ts" />
declare var Snap: any;

class SvgNode implements GraphNode {
  svgElement: any;
  bounds: Rectangle;

  constructor(public nodeSpec: NodeSpec) { }

  getWeight() {
    return this.nodeSpec.id;
  }
}

class SvgEdge extends Edge<SvgNode> {
  svgElement: any;
  constructor(fromNode: SvgNode, toNode: SvgNode) {
    super(fromNode, toNode);
  }
}

enum GraphProperties {
  minLabelWidth = 50,
  nodePadding = 10,
  verticalMargin = 50,
  horizontalMargin = 50
}

class NodeSizeProvider implements SizeProvider<SvgNode> {
  getWidth(node: SvgNode) {
    return node.bounds.width;
  }
  getHeight(node: SvgNode) {
    return node.bounds.height;
  }
  getVerticalMargin() {
    return GraphProperties.verticalMargin;
  }
  getHorizontalMargin() {
    return GraphProperties.horizontalMargin;
  }
}

class SvgDrawContext implements DrawContext {

  private nodes: Array<GraphNode>;
  private edges: Array<GraphEdge>;
  private sizeProvider = new NodeSizeProvider();

  constructor(
    private svg: any,
    public selectionObserver: PartialObserver<GraphNode>,
    private document: GraphDocument) {
      
      this.document.onChange.subscribe(data => {
          this.render(data);
      });

      this.render(this.document.graph);
    }

  findNode(point: Point) {
    return this.nodes.find(node => node.bounds.contains(point));
  }

  resolveNode(node: GraphNode) {
    const oldNode = <SvgNode>node;
    return this.nodes.find(node => (<SvgNode>node).nodeSpec.id == oldNode.nodeSpec.id);
  }

  findEdge(point: Point) {
    return this.edges.find(node => node.contains(point));
  }

  removeTools() {
    this.svg.selectAll("g#tools g").remove();
  }

  displayTool(tool: Tool) {
    const rect = this.svg.rect(tool.origin.x, tool.origin.y, 20, 20, 3, 3)
      .attr({
        rx: "3",
        ry: "3",
        stroke: "#999",
        "stroke-width":"2px",
        fill: "white"
      });
    const image = this.svg.image(tool.imgURL, tool.origin.x + 2, tool.origin.y + 2, 16, 16);
    const group = this.svg.g(rect, image).attr({ class: "tool" });
    this.svg.select("g#tools").append(group);
  }

  nodesClass(name: string, func: (node: GraphNode) => boolean) {
    this.nodes.forEach(node => {
      (<SvgNode>node).svgElement.toggleClass(name, func(node));
    });
  }

  edgesClass(name: string, func: (edge: GraphEdge) => boolean) {
    this.edges.forEach(edge => {
      (<SvgEdge>edge.getOriginalEdge<SvgNode>()).svgElement.toggleClass(name, func(edge));
    });
  }

  displayGhostNode(node: GraphNode): GhostNode {
    const ghost = this.svg.rect()
      .attr({
        rx: "5",
        ry: "5",
        x: node.bounds.x,
        y: node.bounds.y,
        width: node.bounds.width,
        height: node.bounds.height,
        stroke: "#CCC",
        "stroke-width": "2px",
        "fill-opacity": "0.5"
      });
    this.svg.select("g#feedback").append(ghost);
    return new SvgGhostNode(ghost);
  }

  displayGhostLine(from: Point, to: Point): GhostLine {
    const pendingLine = this.svg.line(from.x, from.y, to.x, to.y)
     .attr({
       stroke: "blue",
       "stroke-width": "2px"
      });
    this.svg.select("g#feedback").append(pendingLine);
    return new SvgGhostLine(pendingLine);
  }

  connect(from: GraphNode, to: GraphNode) {
    this.document.connectNodes((<SvgNode>from).nodeSpec, (<SvgNode>to).nodeSpec);
  }

  swap(node: GraphNode, other: GraphNode) {
    console.log("Swap: ", node, other);
  }

  removeNode(node: GraphNode) {
    this.document.removeNode((<SvgNode>node).nodeSpec);
  }

  removeEdge(edge: GraphEdge) {
    const originalEdge = edge.getOriginalEdge<SvgNode>();
    this.document.removeEdge({
      from: originalEdge.getFromNode().nodeSpec.id,
      to: originalEdge.getToNode().nodeSpec.id
    });
  }

  private render(graph: GraphSpec) {
    const svgNodes = this.svg.select("g#nodes");
    const svgEdges = this.svg.select("g#edges");
  
    // clear svg
    svgNodes.selectAll("g").remove();
    svgEdges.selectAll("path").remove();

    const g = this.buildGraph(graph);

    // build svg nodes
    g.getNodes()
      .forEach(node => {
        const rect = this.svg.rect(0, 0, 0, 0, 5, 5);

        const label = this.svg.text(0, 0, node.nodeSpec.label)
          .attr({ dy: 25 });

        const nodeGroup = this.svg.group(rect, label)
          .attr({
            class: "node",
            id: "node-" + node.nodeSpec.id
          });

        // compute node size
        const bbox = label.getBBox();
        bbox.width = Math.max(bbox.width, GraphProperties.minLabelWidth);
        node.bounds = new Rectangle(0, 0,
          bbox.width + 2 * GraphProperties.nodePadding,
          bbox.height + 2 * GraphProperties.nodePadding);
        rect.attr({
          width: node.bounds.width,
          height: node.bounds.height
        });
        label.attr({
          x: node.bounds.width / 2
        });
        node.svgElement = nodeGroup;
        svgNodes.append(nodeGroup);
      });

    // layout graph
    const graphLayout = new GraphLayout(g);
    graphLayout.layout();
    graphLayout.setSizes(this.sizeProvider);

    // place nodes
    g.getNodes().forEach(node => {
      node.svgElement.attr({ transform: "translate(" + node.bounds.x + "," + node.bounds.y + ")" });
      node.svgElement.select("rect").attr({
        width: node.bounds.width,
        height: node.bounds.height
      });
      node.svgElement.select("text").attr({
        x: node.bounds.width / 2
      });
    });

    // draw edges
    graphLayout.getEdges().forEach(edge => {
      const svgElement = this.svg.path(edgeLine(edge.getPoints(), 15))
        .attr({ class: "edge" });
      (<SvgEdge>edge.getOriginalEdge<SvgNode>()).svgElement = svgElement;
      svgEdges.append(svgElement);
    });

    this.svg.attr({ "height": graphLayout.getHeight() });

    this.nodes = g.getNodes();
    this.edges = graphLayout.getEdges();
  }

  private buildGraph(graph: GraphSpec) {
    const g = new Graph<SvgNode, Edge<SvgNode>>();
    const nodeMap = {};
    graph.nodes.forEach(nodeSpec => {
      const node = new SvgNode(nodeSpec);
      nodeMap[nodeSpec.id] = node;
      g.addNode(node);
    });
    graph.edges.forEach(edge => {
      g.addEdge(new Edge(nodeMap[edge.from], nodeMap[edge.to]));
    });
    return g;
  }

}

class SvgGhostNode implements GhostNode {
  constructor(private svgElement: any) { }

  moveTo(position: Point) {
    this.svgElement.attr({
      x: position.x,
      y: position.y
    });
  }
  
  remove() {
    this.svgElement.remove();
  }
}

class SvgGhostLine implements GhostLine {
  constructor(private svgElement: any) {}

  moveEnd(position: Point) {
    this.svgElement.attr({
      x2: position.x,
      y2: position.y
    });
  }

  remove() {
    this.svgElement.remove();
  }
}


@Component({
  selector: 'app-graph-canvas',
  templateUrl: './graph-canvas.component.html',
  styleUrls: ['./graph-canvas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GraphCanvasComponent implements OnInit {

  private svg: any; // Snap.Paper;
  private state: State;
  private selectionSubject = new Subject<GraphNode>();

  @Input() document: GraphDocument;
  @Output() selection: Observable<any>;

  constructor(private graphController: GraphControllerService) {
    this.selection = this.selectionSubject.pipe(map(node => {
      if (node) {
        return (<SvgNode>node).nodeSpec;
      }
      return null;
    }));
  }

  ngOnInit() {
    this.svg = Snap("#graphCanvas");

    this.svg.select("#eventRect")
      .mousedown(this.mouseDown.bind(this))
      .mouseup(this.mouseUp.bind(this))
      .mousemove(this.mouseMove.bind(this));
    
    // TODO render on window resize

    this.state = this.graphController.create(new SvgDrawContext(
      this.svg,
      this.selectionSubject,
      this.document));
  }

  mouseDown(event: any, x: number, y: number) {
    this.state = this.state.mouseDown(toPoint(event));
  }

  mouseUp(event: any, x: number, y: number) {
    this.state = this.state.mouseUp(toPoint(event));
  }

  mouseMove(event: any, x: number, y: number) {
    this.state = this.state.mouseMove(toPoint(event));
  }
}
