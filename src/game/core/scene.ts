import { Object2D } from "./object";
import { Color } from "./utils/color";

export class Scene {
    // TODO: Добавить поддержку Object в качесте бэкграунда (+ sprite)
    public background: Color;
    // Список объектов в сцене
    public objects: Object2D[];

    constructor(background?: Color) {
        this.objects = [];

        this.background = background || new Color(255, 255, 255);
    }

    add(object: Object2D) {
        this.objects.push(object);
    }

    remove(object: Object2D) {
        this.objects = this.objects.filter((x) => x !== object);
    }
}
