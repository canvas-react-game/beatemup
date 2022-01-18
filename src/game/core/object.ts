import { Sprite } from "game/world/world.manager";
import { Geometry } from "./geometry/geometry";
import { Color } from "./utils/color";
import { Vector2D } from "./utils/vector";

export type Object2DProps = {
    geometry: Geometry
    color?: Color
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
    sprite: Sprite | null;

    constructor(props: Object2DProps) {
        // Задаем дефолтные значения
        this.id = getObject2DId();
        this.name = "";
        this.position = new Vector2D(0, 0);
        this.visible = true;
        this.frustumCulled = false;
        this.userData = null;
        this.sprite = null;
        // Сохраняем тип геометрии
        this.geometry = props.geometry;
        this.color = props.color || new Color(0, 0, 0);
    }

    // Базовые методы для объекта
    move(vect: Vector2D) {
        this.position.add(vect);
    }

    rotate() {

    }

    scale() {

    }

    // Обобщенный метод обновления текущего состояния
    // Каждый объект определяет самостоятельно
    // dt - пройденное время
    updateState(dt: number) {

    }
}
