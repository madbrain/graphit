import { Point } from '../geometry';

export function toPoint(event: any) {
    const pt = event.target.ownerSVGElement.createSVGPoint();
    pt.x = event.clientX
    pt.y = event.clientY;
    const transformed = pt.matrixTransform(event.target.ownerSVGElement.getScreenCTM().inverse());
    return new Point(transformed.x, transformed.y);
}

function midPoint(p1: Point, p2: Point, t: number) {
    return new Point(p2.x + Math.sign(p1.x - p2.x) * t, p2.y + Math.sign(p1.y - p2.y) * t);
}

export function edgeLine(points: Array<Point>, radius: number) {
    function pointCoords(point: Point): string {
        return point.x + "," + point.y;
    }
    let path = "M";
    path += pointCoords(points[0]);
    for (let i = 1; i < points.length - 1; i++) {
        path += "L";
        path += pointCoords(midPoint(points[i - 1], points[i], radius));
        path += "Q";
        path += pointCoords(points[i]);
        path += " ";
        path += pointCoords(midPoint(points[i + 1], points[i], radius));
    }
    path += "L";
    // offset the end point because of arrowhead
    path += pointCoords(midPoint(points[points.length - 2], points[points.length - 1], 2));
    return path;
}