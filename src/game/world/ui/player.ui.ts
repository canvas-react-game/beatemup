import { Camera } from "../../core/camera";
import { RectangleGeometry } from "../../core/geometry/rectangle/rectangle";
import { Renderer } from "../../core/renderer";
import { Color } from "../../core/utils/color";
import { Scene } from "../../core/scene";
import { LEVEL_SIZE } from "../world.config";
import { Health } from "./health";

type PlayerUIProps = {
    tileSetImage: HTMLImageElement,
    maxHealth: number
};

export class PlayerUI {
    canvas: HTMLCanvasElement;
    renderer: Renderer;
    camera: Camera;
    scene: Scene;

    health: number;
    maxHealth: number;
    score: number;

    tileSetImage: HTMLImageElement;

    constructor(props: PlayerUIProps) {
        this.canvas = document.createElement("canvas");
        this.canvas.style.position = "absolute";
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;

        this.maxHealth = props.maxHealth;
        this.tileSetImage = props.tileSetImage;
        this.init();
    }

    init() {
        // Создаем Renderer
        this.renderer = new Renderer({
            canvas: this.canvas,
            width: window.innerWidth,
            height: window.innerHeight,
        });
        // Camera
        this.camera = new Camera(LEVEL_SIZE * 1);
        // Задаем бэкграунд и создаем сцену
        // Прозрачный
        const background = new Color(0, 0, 0, 0);
        this.scene = new Scene(background);
        //
        this.updateHealth(this.maxHealth);
    }

    updateHealth(health: number) {
        this.health = health;
        const healthObjects: Health[] = [];
        for (let i = 1; i <= this.maxHealth; i += 1) {
            let isEmpty = false;
            let isHalf = false;
            if (i > this.health) {
                if (i - this.health === 0.5) {
                    isHalf = true;
                } else {
                    isEmpty = true;
                }
            }
            const healthGeom = new RectangleGeometry(16, 16);
            const healthObject = new Health({
                geometry: healthGeom,
                tileSetImage: this.tileSetImage,
                isEmpty,
                isHalf,
            });
            healthObject.position.x = (i - 1) * 16 + 5;
            healthObject.position.y = 5;
            healthObjects.push(healthObject);
        }
        this.scene.objects = this.scene.objects.filter((x) => x instanceof Health);
        this.scene.add(...healthObjects);
    }

    updateScore() {

    }
}
