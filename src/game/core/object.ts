import { Sprite } from "game/world/world.manager";
import { Geometry } from "./geometry/geometry";
import { Color } from "./utils/color";
import { Vector2D } from "./utils/vector";

export type Object2DProps = {
    geometry: Geometry
    color?: Color
};

export type ObjectSpriteConfig = {
    // Изображение
    image: HTMLImageElement | undefined
    sprite: Sprite
    // Нужно ли повернуть
    shouldFlip?: boolean
};

// Get unique geometry id (ssr)
const getObject2DId = (function () {
    let objectId = 0;
    return () => objectId += 1;
}());

export class Object2D {
    // Уникальный id в сцене
    id: number;
    // Опциональное имя объета
    name: string;
    // Позиция объекта в сцене
    // NOTE: x = left, y = top
    position: Vector2D;
    // Rotation in radians
    rotation: number
    // For Canvas Rendering
    rotationCenter: Vector2D | undefined
    // Видимость объектв в сцене
    visible: boolean;
    // Должен ли объект обрезаться камерой при рендеринге
    frustumCulled: boolean;
    // Опциональные данные
    userData: Object | null;
    // Геометрия объекта
    geometry: Geometry;
    // Цвет
    color: Color;
    // Спрайт
    // TODO: Определить тип и реализовать функционал
    spriteConfig: ObjectSpriteConfig | null;

    constructor(props: Object2DProps) {
        // Задаем дефолтные значения
        this.id = getObject2DId();
        this.name = "";
        this.position = new Vector2D(0, 0);
        this.visible = true;
        this.frustumCulled = false;
        this.userData = null;
        this.spriteConfig = null;
        // Сохраняем тип геометрии
        this.geometry = props.geometry;
        this.color = props.color || new Color(0, 0, 0);
    }

    // Базовые методы для объекта
    move(vect: Vector2D) {
        this.position.add(vect);
    }

    rotateAround(center: Vector2D, angle: number) {
        this.rotation = angle;
		this.rotationCenter = new Vector2D(
            center.x - this.position.x, 
            center.y - this.position.y
        );
    }

    scale() {

    }

    // Обобщенный метод обновления текущего состояния
    // Каждый объект определяет самостоятельно
    // Происходит каждые STEP
    updateState() {

    }
}
