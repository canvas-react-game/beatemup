import { Object2D } from "./object";
import { Color } from "./utils/color";

export class Scene {
    // TODO: Добавить поддержку Object в качесте бэкграунда (+ sprite)
    public background: Color;
    // Список объектов в сцене
    public objects: Object2D[];
    // Список объектов в сцене с физикой
    public objectWithPhysics: Object2D[];

    constructor(background?: Color) {
        this.objects = [];
        this.objectWithPhysics = [];

        this.background = background || new Color(255, 255, 255);
    }

    add(...objects: Object2D[]) {
        this.objects.push(...objects);
    }

    addObjectWithPhysics(...objects: Object2D[]) {
        this.objectWithPhysics.push(...objects);
    }

    remove(object: Object2D) {
        this.objects = this.objects.filter((x) => x !== object);
        this.objectWithPhysics = this.objectWithPhysics.filter((x) => x !== object);
    }
}
