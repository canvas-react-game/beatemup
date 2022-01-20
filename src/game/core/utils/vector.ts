export class Vector2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(vector: Vector2D): Vector2D {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    }


    rotateAround(center: Vector2D, angle: number): Vector2D {
        this.x = Math.cos(angle) * (this.x - center.x) - Math.sin(angle) * (this.y - center.y) + center.x
        this.y =  Math.sin(angle) * (this.x - center.x) + Math.cos(angle) * (this.y - center.y) + center.y

        return this
    }

    copy(): Vector2D {
        return new Vector2D(this.x, this.y);
    }
}
