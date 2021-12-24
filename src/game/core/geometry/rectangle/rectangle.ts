import { Box2 } from "../../utils/box2";
import { Vector2D } from "../../utils/vector";
import { Geometry, GeometryTypes } from "../geometry";

export class RectangleGeometry extends Geometry {

    width: number
    height: number

    constructor(width: number, height: number) {
        super({ geomType: GeometryTypes.Rectangle })

        this.width = width
        this.height = height
    }

    calculateBoundingBox(position: Vector2D) {
        if(!this.boundingBox) {
            this.boundingBox = new Box2(
                new Vector2D(0, 0), 
                new Vector2D(0, 0)
            )
        }
        const rectangle = new Vector2D(this.width, this.height)
        this.boundingBox.min = position
        this.boundingBox.max = position.copy().add(rectangle)
    }

}