import { Object2D } from "./object";

export class Camera {
    // TODO: Размеры viewport, zoom, объект привязки
    bindedObject: Object2D
    size: number

    get x(): number {
        return this.bindedObject.position.x
    }

    get y(): number {
        return this.bindedObject.position.y
    }

    constructor(size: number) {
        this.size = size
    }

    bindObject(object: Object2D) {
        this.bindedObject = object
    }
    // TODO: frustumView culling
}
