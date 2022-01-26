import { Box2 } from "../utils/box2";
import { Circle } from "../utils/circle";
import { Object2D } from "../object";

export enum GeometryTypes {
    Rectangle = "Rectangle",
    Circle = "Circle",
    Shape = "Shape", // Свободная форма
}

type GeometryProps = {
    geomType: string, // GeometryTypes
};

// Get unique geometry id (ssr)
const getGeomId = (function () {
    let geometryId = 0;
    return () => {
        geometryId += 1;
        return geometryId;
    };
}());

export class Geometry {
    // Уникальный id геометрии
    id: number;
    // Опциональное имя
    name: string;
    // Bounding box геометрии (для расчетов)
    boundingBox: Box2 | null;
    // Bounding circle геометрии (для расчетов)
    boundingCircle: Circle | null;
    // Тип геометрии (для отрисовки)
    type: string;

    constructor(props: GeometryProps) {
        this.id = getGeomId();
        this.name = "";
        this.type = props.geomType;

        this.boundingBox = null;
        this.boundingCircle = null;
    }

    // TODO: Методы работы с геометрией
    calculateBoundingBox(object: Object2D) {

    }

    calculateBoundingCircle(object: Object2D) {

    }
}
