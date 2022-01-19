import { STEP } from "../../world/world.config";
import { MoveAnimation } from "../animations/move/moveAnimation";
import { RectangleGeometry } from "../geometry/rectangle/rectangle";
import { Object2D } from "../object";
import { Box2 } from "../utils/box2";
import { Vector2D } from "../utils/vector";

export interface Collidable {
    canCollide: boolean
    onCollide(obstacle: Object2D & Collidable, ...args: any): void
}

export function isImplementingCollision(obj1: Object2D): obj1 is Object2D & Collidable {
    return (obj1 as Object).hasOwnProperty("canCollide");
}

class Physics {
    hasBox2DCollided(obj1: Object2D, obj2: Object2D): boolean {
        // Пересчитываем BoundingBox
        obj1.geometry.calculateBoundingBox(obj1.position);
        obj2.geometry.calculateBoundingBox(obj2.position);
        // Получаем BB объектов
        const box1 = obj1.geometry.boundingBox as Box2;
        const box2 = obj2.geometry.boundingBox as Box2;
        // Простая AABB проверка
        if (
            box1.min.x < box2.max.x
            && box1.max.x > box2.min.x
            && box1.min.y < box2.max.y
            && box1.max.y > box2.min.y
        ) {
            return true;
        }
        return false;
    }

    // Общая идея в том, чтобы определить в следствие какого движения произошло столкновение
    // Для этого мы берем предыдущую позицию и проверяем произойдет ли столкновение
    // если передвинуться на расчетное значение delta
    // Если столкновение произойдет, то пересчитываем позицию
    // иначе восстанавливаем текущую позицию
    getNewPositionAfterWallCollision(
        object: Object2D,
        obstacle: Object2D,
        moveAnimation: MoveAnimation,
        prevPosition: Vector2D,
    ): Vector2D {
        // Края объекта не должны пересекаться с bounding box obstacle
        const objGeom = object.geometry as RectangleGeometry;
        const obstGeomBB = obstacle.geometry.boundingBox as Box2;
        const {
            isMovingRight, isMovingLeft, isMovingDown, isMovingTop,
        } = moveAnimation.moveState;
        // Сохраняем текущую позицию (позиция после движения)
        const position = object.position.copy();
        const delta = STEP * moveAnimation.speed;
        if (isMovingRight) {
            // Устанавливаем предыдущую позицию
            object.position = prevPosition.copy();
            // Делаем шаг вправо
            object.position.x += delta;
            // Проверяем стало ли это причиной столкновения
            const isCollisionCause = this.hasBox2DCollided(object, obstacle);
            if (isCollisionCause) {
                // Обновляем координаты если стало
                object.position.x = obstacle.position.x - objGeom.width;
                object.position.y = position.y;
                // Дальше не идем, иначе восстановим случайно позицию
                return object.position;
            }

            // Восстанавливаем позицию
            object.position = position;
        }
        if (isMovingDown) {
            object.position = prevPosition.copy();
            object.position.y += delta;
            const isCollisionCause = this.hasBox2DCollided(object, obstacle);
            if (isCollisionCause) {
                object.position.x = position.x;
                object.position.y = obstGeomBB.min.y - objGeom.height;
                return object.position;
            }

            object.position = position;
        }
        if (isMovingLeft) {
            object.position = prevPosition.copy();
            object.position.x -= delta;
            const isCollisionCause = this.hasBox2DCollided(object, obstacle);
            if (isCollisionCause) {
                object.position.x = obstGeomBB.max.x;
                object.position.y = position.y;
                return object.position;
            }

            object.position = position;
        }
        if (isMovingTop) {
            object.position = prevPosition.copy();
            object.position.y -= delta;
            const isCollisionCause = this.hasBox2DCollided(object, obstacle);
            if (isCollisionCause) {
                object.position.x = position.x;
                object.position.y = obstGeomBB.max.y;
                return object.position;
            }

            object.position = position;
        }
        return object.position;
    }
}

export default new Physics();
