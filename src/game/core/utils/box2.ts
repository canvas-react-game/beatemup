import { Vector2D } from "./vector";

export class Box2 {
    min: Vector2D;
    max: Vector2D;

    constructor(min: Vector2D, max: Vector2D) {
        this.min = min;
        this.max = max;
    }
}
