import { Object2D } from "../object";
import { Box2 } from "../utils/box2";

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
}

export default new Physics();
