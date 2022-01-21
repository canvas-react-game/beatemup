import { Object2D } from "./object";

export class Camera {
    // TODO: Размеры viewport, zoom, объект привязки
    bindedObject: Object2D | null;
    size: number;

    get x(): number {
        return this.bindedObject?.position.x || 0;
    }

    get y(): number {
        return this.bindedObject?.position.y || 0;
    }

    constructor(size: number) {
        this.size = size;
    }

    bindObject(object: Object2D) {
        this.bindedObject = object;
    }
    // TODO: frustumView culling
}
