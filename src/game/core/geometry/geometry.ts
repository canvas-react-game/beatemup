import { Vector2D } from "../utils/vector"
import { Box2 } from "../utils/box2"
import { Circle } from "../utils/circle"

let _geometryId = 0

export enum GeometryTypes {
    rectangle = "rectangle",
    circle = "circle",
    shape = "shape", // Свободная форма
}

type GeometryProps = {
    geomType: string, // GeometryTypes
}

export class Geometry {

    // Уникальный id геометрии
    id: number
    // Опциональное имя
    name: string
    // Bounding box геометрии (для расчетов)
    boundingBox: Box2 | null
    // Bounding circle геометрии (для расчетов)
    boundingCircle: Circle | null
    // Тип геометрии (для отрисовки)
    type: string

    constructor(props: GeometryProps) {

        this.id = _geometryId ++
        this.name = ""
        this.type = props.geomType

        this.boundingBox = null
        this.boundingCircle = null
    }

    // TODO: Методы работы с геометрией
    calculateBoundingBox(position: Vector2D) {

    }

    calculateBoundingCircle(position: Vector2D) {

    }
}