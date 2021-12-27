import { Vector2D } from "./vector";

export class Circle {
    center: Vector2D;
    radius: number;

    constructor(center: Vector2D, radius: number) {
        this.center = center;
        this.radius = radius;
    }
}
