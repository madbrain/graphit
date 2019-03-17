
import { GMap, remove } from './utils';

export class Graph<T, E extends Edge<T>> {

	private nodes: GMap<T, NodeWrapper<E>>;
	private edges: Array<E>;

	constructor(graph?: Graph<T, E>) {
		this.nodes = new GMap();
		this.edges = [];

		if (graph != null) {
			graph.getNodes().forEach(node => {
				this.addNode(node);
			});
			graph.getEdges().forEach(edge => {
				this.addEdge(edge);
			});
		}
	}

	addNode(node: T) {
		this.nodes.put(node, new NodeWrapper());
	}

	addEdge(edge: E) {
		this.edges.push(edge);
		this.nodes.get(edge.getFromNode()).edges.push(edge);
		this.nodes.get(edge.getToNode()).edges.push(edge);
		this.nodes.get(edge.getFromNode()).outgoings.push(edge);
		this.nodes.get(edge.getToNode()).incomings.push(edge);
	}

	removeNode(node: T) {
		const wrapper = this.nodes.remove(node);
		wrapper.incomings.forEach(edge => {
			remove(this.edges, edge);
			remove(this.getOutgoings(edge.getFromNode()), edge);
			remove(this.getEdges(edge.getFromNode()), edge);
		});
		wrapper.outgoings.forEach(edge => {
			remove(this.edges, edge);
			remove(this.getIncomings(edge.getToNode()), edge);
			remove(this.getEdges(edge.getToNode()), edge);
		});
	};

	getNodes(): Array<T> {
		return this.nodes.keys();
	}

	getEdges(node?: T): Array<E> {
		if (node != null) {
			return this.nodes.get(node).edges;
		}
		return this.edges;
	}

	getIncomings(node: T) {
		return this.nodes.get(node).incomings;
	}

	getOutgoings(node: T) {
		return this.nodes.get(node).outgoings;
	}

	getSink(): T {
		return this.getNodes().find(node => this.nodes.get(node).outgoings.length == 0);
	}

	getSource(): T {
		return this.getNodes().find(node => this.nodes.get(node).incomings.length == 0);
	};

	getIsolated(): T {
		return this.getNodes().find(node =>
			this.nodes.get(node).incomings.length == 0
				&& this.nodes.get(node).outgoings.length == 0);
	}

	replaceEdgeBy(edge: E, fromEdge: E, toEdge: E) {
		remove(this.edges, edge);
		this.replaceOutgoingEdge(edge, fromEdge);
		this.replaceIncomingEdge(edge, toEdge);
	}

	replaceOutgoingEdge(edge: E, newEdge: E) {
		this.edges.push(newEdge);
		this.getIncomings(newEdge.getToNode()).push(newEdge);
		this.replaceEdge(this.getOutgoings(edge.getFromNode()), edge, newEdge);
		this.replaceEdge(this.getEdges(edge.getFromNode()), edge, newEdge);
	}

	replaceIncomingEdge(edge: E, newEdge: E) {
		this.edges.push(newEdge);
		this.getOutgoings(newEdge.getFromNode()).push(newEdge);
		this.replaceEdge(this.getIncomings(edge.getToNode()), edge, newEdge);
		this.replaceEdge(this.getEdges(edge.getToNode()), edge, newEdge);
	}

	private replaceEdge(edges: Array<Edge<T>>, oldEdge: Edge<T>, newEdge: Edge<T>) {
		for (let i = 0; i < edges.length; ++i) {
			if (edges[i] == oldEdge) {
				edges[i] = newEdge;
				return;
			}
		}
		throw new Error("edge not found");
	}

}

class NodeWrapper<E> {
	public edges: Array<E> = [];
	public incomings: Array<E> = [];
	public outgoings: Array<E> = [];
}

export class Edge<T> {
	constructor(private fromNode: T, private toNode: T) {}

	getFromNode(): T {
		return this.fromNode;
	}

	getToNode(): T {
		return this.toNode;
	}

	getOpposite(node: T): T {
		if (node == this.fromNode) {
			return this.toNode;
		}
		return this.fromNode;
	}
}