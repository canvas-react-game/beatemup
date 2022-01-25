import { Object2D } from "game/core/object";
import { Box2 } from "../../utils/box2";
import { Vector2D } from "../../utils/vector";
import { Geometry, GeometryTypes } from "../geometry";

export class RectangleGeometry extends Geometry {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super({ geomType: GeometryTypes.Rectangle });

        this.width = width;
        this.height = height;
    }

    // Учитываем поворот и shouldFlip
    calculateBoundingBox(object: Object2D) {
        if (!this.boundingBox) {
            this.boundingBox = new Box2(
                new Vector2D(0, 0),
                new Vector2D(0, 0),
            );
        }
        const rectangle = new Vector2D(this.width, this.height);
        const { position } = object;
        if (object.rotation && object.rotationCenter) {
            // Угол и центр поворота
            let angle = object.rotation;
            // TODO: Баг позиционирования слева и дальности удара !
            if (object.spriteConfig?.shouldFlip) {
                angle = -angle;
            }
            const center = object.rotationCenter.copy().add(
                new Vector2D(object.position.x, object.position.y),
            );
            // Вращаем каждую точку вокруг центра
            const p1 = new Vector2D(object.position.x, object.position.y);
            const p2 = new Vector2D(object.position.x, object.position.y + this.height);
            const p3 = new Vector2D(object.position.x + this.width, object.position.y);
            const p4 = new Vector2D(
                object.position.x + this.width,
                object.position.y + this.height,
            );
            p1.rotateAround(center, angle);
            p2.rotateAround(center, angle);
            p3.rotateAround(center, angle);
            p4.rotateAround(center, angle);
            // Собираем новый BB из точек
            const minX = Math.min(p1.x, p2.x, p3.x, p4.x);
            const maxX = Math.max(p1.x, p2.x, p3.x, p4.x);
            const minY = Math.min(p1.y, p2.y, p3.y, p4.y);
            const maxY = Math.max(p1.y, p2.y, p3.y, p4.y);
            const newMin = new Vector2D(minX, minY);
            const newMax = new Vector2D(maxX, maxY);
            // Новый BB
            this.boundingBox = new Box2(newMin, newMax);
        } else {
            this.boundingBox.min = position;
            this.boundingBox.max = position.copy().add(rectangle);
        }
    }
}
