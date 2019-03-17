
import { Point, Rectangle } from './geometry';
import { Graph, Edge } from './graph';
import { GMap } from './utils';

enum Side {
	TOP = 0,
	BOTTOM = 1,
	LEFT = 2,
	RIGHT = 3
}

export interface SizeProvider<T> {
	getWidth(node: T): number;
	getHeight(node: T): number;
	getVerticalMargin(): number;
	getHorizontalMargin(): number;
}

export interface GraphNode {
	getWeight(): number;
	bounds: Rectangle;
}

export interface GraphEdge {
	getPoints(): Array<Point>;
	contains(point: Point): boolean;
	getOriginalEdge<T>(): Edge<T>;
}

class EdgePositionAdjuster<T extends GraphNode> {

	private outgoings: Array<EdgePart<T>>;
	private incomings: Array<EdgePart<T>>;
	private straightEdge: EdgePart<T>;

	constructor(private side: Side, private node: GraphicalNode<T>) { }

	reset() {
		this.outgoings = [];
		this.incomings = [];
		this.straightEdge = null;
	}

	add(edge: EdgePart<T>) {
		if (edge.getFromNode() == this.node) {
			this.outgoings.push(edge);
		} else {
			this.incomings.push(edge);
		}
		if (edge.getFromLine() == edge.getToLine()) {
			this.straightEdge = edge;
		}
	};

	adjust(edge: EdgePart<T>): Point {
		var point = this.node.getPoint(this.side);

		if (this.incomings.length <= 1 && this.outgoings.length <= 1
			|| this.straightEdge == edge) {
			return point;
		}
		this.incomings.sort((o1, o2) => {
			var o1Opposite = o1.getOpposite(this.node);
			var o2Opposite = o2.getOpposite(this.node);
			if (this.side == Side.LEFT) {
				return o2Opposite.rankNumber - o1Opposite.rankNumber;
			}
			return o1Opposite.line - o2Opposite.line;
		});
		this.outgoings.sort((o1, o2) => {
			var o1Opposite = o1.getOpposite(this.node);
			var o2Opposite = o2.getOpposite(this.node);
			if (this.side == Side.RIGHT) {
				return o1Opposite.rankNumber - o2Opposite.rankNumber;
			}
			return o2Opposite.line - o1Opposite.line;
		});
		const edges = this.incomings.concat(this.outgoings);
		let size = this.getSize();
		let pos = edges.indexOf(edge) + 1;
		let total = edges.length + 1;
		if (this.straightEdge != null) {
			size -= size / 2;
			var straightPos = edges.indexOf(this.straightEdge);
			if (straightPos > pos) {
				total = straightPos;
			} else {
				pos -= straightPos;
				total -= straightPos;
			}
		}
		const offset = Math.floor((size * pos) / total - size / 2);
		if (this.side == Side.LEFT || this.side == Side.RIGHT) {
			return new Point(point.x, point.y + offset);
		}
		return new Point(point.x + offset, point.y);
	};

	private getSize(): number {
		return this.side == Side.LEFT || this.side == Side.RIGHT ?
			this.node.bounds.height
			: this.node.bounds.width;
	};
}

class GraphicalNode<T extends GraphNode> {

	public node: T;
	private weight: number;
	public isDummy: boolean;
	public line: number;
	public rankNumber: number;
	private adjusters: Array<EdgePositionAdjuster<T>>;
	public rank: Rank<T>;
	public bounds: Rectangle;

	constructor(node: T, weight?: number) {
		if (node) {
			this.node = node;
			this.weight = 0; // node.getWeight();
			this.isDummy = false;
		} else {
			this.node = null;
			this.weight = weight;
			this.isDummy = true;
		}
		this.rankNumber = -1;
		this.adjusters = [
			new EdgePositionAdjuster(Side.TOP, this),
			new EdgePositionAdjuster(Side.BOTTOM, this),
			new EdgePositionAdjuster(Side.LEFT, this),
			new EdgePositionAdjuster(Side.RIGHT, this)
		];
	}

	hasLine(): boolean {
		return this.line >= 0;
	}

	getWeight(): number {
		return this.weight;
	}

	computeSideInfo(graph: Graph<GraphicalNode<T>, EdgePart<T>>) {
		for (let adjuster of this.adjusters) {
			adjuster.reset();
		}
		graph.getOutgoings(this).forEach(edge => {
			this.adjusters[edge.getFromSide()].add(edge);
		});
		graph.getIncomings(this).forEach(edge => {
			this.adjusters[edge.getToSide()].add(edge);
		});
	}

	getAdjustedPoint(edge) {
		return this.adjusters[edge.getFromNode() == this ?
			edge.getFromSide() : edge.getToSide()].adjust(edge);
	}

	getPoint(side: Side): Point {
		if (this.isDummy) {
			return new Point(this.bounds.getCenterX(), this.bounds.getCenterY());
		}
		if (side == Side.LEFT) {
			return new Point(this.bounds.x, this.bounds.getCenterY());
		}
		if (side == Side.RIGHT) {
			return new Point(this.bounds.getMaxX(), this.bounds.getCenterY());
		}
		if (side == Side.TOP) {
			return new Point(this.bounds.getCenterX(), this.bounds.y);
		}
		if (side == Side.BOTTOM) {
			return new Point(this.bounds.getCenterX(), this.bounds.getMaxY());
		}
		throw new Error();
	}

	setBounds(bounds: Rectangle) {
		this.bounds = bounds;
		if (this.node != null) {
			this.node.bounds = bounds;
		}
	}
}

class EdgePart<T extends GraphNode> extends Edge<GraphicalNode<T>> {
	constructor(fromNode: GraphicalNode<T>, toNode: GraphicalNode<T>, public originalEdge: Edge<T>) {
		super(fromNode, toNode);
	}

	getFromLine() {
		return this.getFromNode().line;
	};

	getToLine() {
		return this.getToNode().line;
	};

	getFromSide() {
		if (this.getFromNode().line < this.getToNode().line) {
			return Side.BOTTOM;
		}
		return Side.RIGHT;
	};

	getToSide() {
		if (this.getFromNode().line > this.getToNode().line) {
			return Side.BOTTOM;
		}
		return Side.LEFT;
	}
}

class GraphicalEdge<T extends GraphNode> implements GraphEdge {

	private originalEdge: Edge<T>;
	private firstEdge: EdgePart<T>;
	private secondEdge: EdgePart<T>;

	constructor(edge: EdgePart<T>) {
		this.originalEdge = edge.originalEdge;
		this.firstEdge = edge;
	}

	getOriginalEdge<R>(): Edge<R> {
		return <Edge<R>><any>this.originalEdge;
	}

	update(fromEdge: EdgePart<T>, toEdge: EdgePart<T>) {
		this.firstEdge = fromEdge;
		this.secondEdge = toEdge;
	}

	getPoints(): Array<Point> {
		const points = [];

		let fromNode = this.firstEdge.getFromNode();
		let fromPoint = fromNode.getAdjustedPoint(this.firstEdge);
		points.push(fromPoint);

		let toNode = this.firstEdge.getToNode();
		let toPoint = toNode.getAdjustedPoint(this.firstEdge);
		this.addCornerPoint(fromNode, toNode, fromPoint, toPoint, points);

		if (this.secondEdge != null) {
			fromNode = toNode;
			fromPoint = toPoint;
			toNode = this.secondEdge.getToNode();
			toPoint = toNode.getAdjustedPoint(this.secondEdge);
			this.addCornerPoint(fromNode, toNode, fromPoint, toPoint, points);
		}
		points.push(toPoint);
		return points;
	}

	private addCornerPoint (fromNode: GraphicalNode<T>, toNode: GraphicalNode<T>, fromPoint: Point, toPoint: Point, points: Array<Point>) {
		if (fromNode.line < toNode.line) {
			// go down first then right
			points.push(new Point(fromPoint.x, toPoint.y));
		} else if (fromNode.line > toNode.line) {
			// go right then go up
			points.push(new Point(toPoint.x, fromPoint.y));
		}
	}

	contains(point: Point): boolean {
		let previous: Point = null;
		for (let p of this.getPoints()) {
			if (previous != null) {
				if (previous.cornerTo(p).expand(5).contains(point)) {
					return true;
				}
			}
			previous = p;
		}
		return false;
	}

	reverse(): EdgePart<T> {
		throw new Error();
	}

}

class Rank<T extends GraphNode> {
	public nodes: Array<GraphicalNode<T>> = [];
	public width: number;

	constructor(private index: number) { }

	addNode(node: GraphicalNode<T>) {
		this.nodes.push(node);
		node.rank = this;
	};

	computeSize(sizeProvider : SizeProvider<T>) {
		this.width = 0;
		this.nodes.forEach(node => {
			if (node.node != null) {
				this.width = Math.max(this.width, sizeProvider.getWidth(node.node));
			}
		});
	};

	getNodeAt(line: number): GraphicalNode<T> {
		for (var i = 0; i < this.nodes.length; ++i) {
			if (this.nodes[i].line == line) {
				return this.nodes[i];
			}
		}
		return null;
	}
}

const WEIGHT_COMPARATOR = (o1, o2) => {
	return o1.getWeight() - o2.getWeight();
};

const LINE_COMPARATOR = (o1, o2) => {
	return o1.line - o2.line;
};

export class GraphLayout<T extends GraphNode> {

	private workGraph: Graph<GraphicalNode<T>, EdgePart<T>>;
	private edgeMap: GMap<EdgePart<T>, GraphicalEdge<T>> = new GMap();
	private maxWidth: number;
	private maxHeight: number;
	private ranks: Array<Rank<T>>;

	constructor(private graph: Graph<T, Edge<T>>) { }

	layout () {
		this.createWorkGraph(this.graph);
		this.makeAcyclic();
		this.rankNodes();
		this.makeLines();
		//this.correctEdgeOverlap();
		this.computeSideInfo();
	}

	private createWorkGraph (graph: Graph<T, Edge<T>>) {
		this.workGraph = new Graph();
		const nodeMap: GMap<T, GraphicalNode<T>> = new GMap();
		graph.getNodes().forEach(node => {
			const graphicalNode = new GraphicalNode(node);
			nodeMap.put(node, graphicalNode);
			this.workGraph.addNode(graphicalNode);
		});
		this.edgeMap.clear();
		graph.getEdges().forEach(e => {
			const edge = new EdgePart(nodeMap.get(e.getFromNode()), nodeMap.get(e.getToNode()), e);
			this.workGraph.addEdge(edge);
			this.edgeMap.put(edge, new GraphicalEdge(edge));
		});
	}

	private makeAcyclic () {
		const g = new Graph(this.workGraph);
		const edges: Array<EdgePart<T>> = [];
		while (g.getNodes().length > 0) {
			let v = null;
			while ((v = g.getSink()) != null) {
				edges.push(...g.getIncomings(v));
				g.removeNode(v);
			}
			while ((v = g.getIsolated()) != null) {
				g.removeNode(v);
			}
			while ((v = g.getSource()) != null) {
				edges.push(...g.getOutgoings(v));
				g.removeNode(v);
			}
			if (g.getNodes().length != 0) {
				var maxNodes = [];
				var maxValue = 0;
				g.getNodes().forEach(n => {
					var value = Math.max(g.getOutgoings(n).length, g.getIncomings(n).length);
					if (maxNodes.length == 0 || maxValue <= value) {
						if (maxValue < value) {
							maxNodes = [];
							maxValue = value;
						}
						maxNodes.push(n);
					}
				});
				// use weight to make algorithm deterministic
				maxNodes.sort(WEIGHT_COMPARATOR);
				var maxNode = maxNodes[0];
				edges.push(...g.getOutgoings(maxNode));
				g.removeNode(maxNode);
			}
		}
		this.workGraph.getEdges().slice().forEach(edge => {
			if (edges.indexOf(edge) < 0) {
				const gEdge = this.edgeMap.remove(edge);
				const newEdge = gEdge.reverse();
				this.edgeMap.put(newEdge, gEdge);
				// this.workGraph.replaceEdgeBy(edge, newEdge);
				throw new Error();
			}
		});
	}

	private rankNodes () {
		let maxRank = 0;
		const work = this.workGraph.getNodes().slice();
		this.ranks = [];
		while (work.length > 0) {
			const node = work.shift();
			let rank = 0;
			this.workGraph.getIncomings(node).forEach(edge => {
				const fromNode = edge.getFromNode();
				if (fromNode.rankNumber < 0) {
					rank = -1;
					return true;
				}
				rank = Math.max(rank, fromNode.rankNumber + 1);
			});
			if (rank < 0) {
				work.push(node);
			} else {
				node.rankNumber = rank;
				maxRank = Math.max(maxRank, rank);
			}
		}
		for (let i = 0; i <= maxRank; ++i) {
			this.ranks.push(new Rank(i));
		}
		this.workGraph.getNodes().forEach(node => {
			this.ranks[node.rankNumber].addNode(node);
		});
	}

	private makeLines () {
		this.workGraph.getNodes().forEach(node => {
			node.line = -1;
		});
		var line = 0;
		this.ranks[0].nodes.sort(WEIGHT_COMPARATOR);
		this.ranks[0].nodes.forEach(node => {
			line = this.assignNodeLine(node, line) + 1;
		});
		for (var i = 1; i < this.ranks.length; ++i) {
			this.ranks[i].nodes.sort(LINE_COMPARATOR);
		}
	};

	private assignNodeLine (node: GraphicalNode<T>, line: number): number {
		node.line = line;
		this.workGraph.getOutgoings(node).slice().forEach(edge => {
			var toNode = edge.getToNode();
			if (!toNode.hasLine()) {
				if (this.hasOtherNodeOnLine(edge, line, false)) {
					++line;
				}
				line = this.assignNodeLine(edge.getToNode(), line);
			} else {
				if (this.hasOtherNodeOnLine(edge, edge.getFromLine(), true)) {
					++line;
					this.insertDummyNode(edge, line);
				}
			}
		});
		return line;
	};

	private hasOtherNodeOnLine (edge: EdgePart<T>, line: number, testSameLine: boolean): boolean {
		return this.workGraph.getOutgoings(edge.getFromNode()).find(e => {
			return e != edge && e.getToNode().hasLine() && e.getFromSide() == Side.RIGHT
				&& (!testSameLine || e.getToLine() == line);
		}) != undefined;
	};

	private insertDummyNode (edge: EdgePart<T>, line: number) {
		const newRankNumber = edge.getFromNode().rankNumber + 1;
		const newNode = new GraphicalNode(<T>null, this.workGraph.getNodes().length);
		newNode.line = line;
		newNode.rankNumber = newRankNumber;
		this.workGraph.addNode(newNode);
		this.ranks[newRankNumber].addNode(newNode);

		const fromEdge = new EdgePart(edge.getFromNode(), newNode, edge.originalEdge);
		const toEdge = new EdgePart(newNode, edge.getToNode(), edge.originalEdge);
		this.workGraph.replaceEdgeBy(edge, fromEdge, toEdge);

		const graphicalEdge = this.edgeMap.remove(edge);
		graphicalEdge.update(fromEdge, toEdge);
		this.edgeMap.put(fromEdge, graphicalEdge);
		this.edgeMap.put(toEdge, graphicalEdge);
	};

	computeSideInfo () {
		this.workGraph.getNodes().forEach(node => {
			node.computeSideInfo(this.workGraph);
		});
	};

	setSizes (sizeProvider: SizeProvider<T>) {
		let maxLine = 0;
		this.ranks.forEach(rank => {
			rank.computeSize(sizeProvider);
			rank.nodes.forEach(node => {
				maxLine = Math.max(maxLine, node.line);
			});
		});
		const heights = [];
		for (let line = 0; line <= maxLine; ++line) {
			let height = 0;
			this.ranks.forEach(rank => {
				var node = rank.getNodeAt(line);
				if (node != null && node.node != null) {
					height = Math.max(height, sizeProvider.getHeight(node.node));
				}
			});
			heights.push(height);
		}
		let y = sizeProvider.getVerticalMargin();
		this.maxWidth = 0;
		this.maxHeight = 0;
		for (let line = 0; line < heights.length; ++line) {
			let x = sizeProvider.getHorizontalMargin();
			this.ranks.forEach(rank => {
				const node = rank.getNodeAt(line);
				if (node != null) {
					node.setBounds(new Rectangle(x, y, rank.width, heights[line]));
				}
				x += rank.width + sizeProvider.getHorizontalMargin();
			});
			this.maxWidth = Math.max(this.maxWidth, x);
			y += heights[line] + sizeProvider.getVerticalMargin();
		}
		this.maxHeight = y;
	}

	getEdges (): Array<GraphEdge> {
		return this.edgeMap.values();
	}

	getWidth (): number {
		return this.maxWidth;
	}

	getHeight (): number {
		return this.maxHeight;
	}

}