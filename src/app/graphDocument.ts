import { Subject } from "rxjs";

export interface NodeSpec {
    id: number;
    label: string;
    weight?: number;
}

export interface EdgeSpec {
    from: number;
    to: number;
}

export interface GraphSpec {
    nodes: NodeSpec[];
    edges: EdgeSpec[];
}

export class GraphDocument {

    public dirty: boolean = false;
    private lastSave = 0;
    private resource_id = null;

    onChange = new Subject<GraphSpec>();
    info = {
        title: "Mon Doc",
        editable: true,
        resource_id: null
    };
    graph: GraphSpec = {
        nodes: [
            { id: 1, label: "Accepted" },
            { id: 2, label: "Removed" },
            { id: 3, label: "Transfered" },
            { id: 4, label: "Canceled" },
            { id: 5, label: "Changed" },
            { id: 6, label: "Abandonned" }
        ],
        edges: [
            { from: 1, to: 3 },
            { from: 1, to: 2 },
            { from: 2, to: 3 },
            { from: 3, to: 5 },
            { from: 5, to: 6 },
            { from: 3, to: 6 },
            { from: 3, to: 6 },
            { from: 4, to: 2 }
        ]
    };

    constructor() { }

    timeSinceLastSave() {
        return new Date().getTime() - this.lastSave;
    }

    public snapshot() {
        this.dirty = false;
        const data: any = Object.assign({}, this.info);
        data.resource_id = this.resource_id;
        if (this.info.editable) {
            data.content = JSON.stringify(this.graph);
        }
        return data;
    }

    /*
    doc.$watch('info',
        function (newValue, oldValue) {
            if (oldValue != null && newValue === oldValue) {
            	doc.dirty = true;
            }
        },
        true);
    */

    change(isDirty: boolean) {
        this.dirty = isDirty;
        this.onChange.next(this.graph);
    };

    setGraph(graph: GraphSpec) {
        this.graph = graph;
        this.change(false);
    }

    addNode() {
        let newId = 0;
        if (this.graph.nodes.length > 0) {
            newId = Math.max(...this.graph.nodes.map(node => node.id)) + 1;
        }
        this.graph.nodes.push({ id: newId, label: "Unnamed", weight: newId });
        this.change(true);
    }

    connectNodes(from: NodeSpec, to: NodeSpec) {
        this.graph.edges.push({ from: from.id, to: to.id });
        this.change(true);
    }

    removeNode(removedNode: NodeSpec) {
        this.graph.edges = this.graph.edges.filter(edge => edge.from != removedNode.id && edge.to != removedNode.id);
        this.graph.nodes = this.graph.nodes.filter(node => node.id != removedNode.id);
        this.change(true);
    }

    removeEdge(removedEdge: EdgeSpec) {
        this.graph.edges = this.graph.edges.filter(edge => edge.from != removedEdge.from || edge.to != removedEdge.to);
        this.change(true);
    }

}