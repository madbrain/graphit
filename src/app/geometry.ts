
export class Point {
	constructor(public x: number, public y: number) {}

	cornerTo (other: Point) {
		return new Rectangle(
			Math.min(this.x, other.x),
			Math.min(this.y, other.y),
			Math.abs(this.x - other.x),
			Math.abs(this.y - other.y));
	}

	rect(width: number, height: number) {
		return new Rectangle(this.x, this.y, width, height);
	}
}

export class Rectangle {
	constructor(public x: number, public y: number, public width: number, public height: number) {}

	getMaxX () {
		return this.x + this.width;
	}

	getMaxY () {
		return this.y + this.height;
	}

	getCenterX () {
		return this.x + Math.floor(this.width / 2);
	}

	getCenterY () {
		return this.y + Math.floor(this.height / 2);
	}

	contains (point: Point) {
		return this.x <= point.x && point.x < (this.x + this.width)
			&& this.y <= point.y && point.y < (this.y + this.height);
	}

	expand (amount: number) {
		return new Rectangle(this.x - amount, this.y - amount,
			this.width + amount * 2, this.height + amount * 2);
	}

}