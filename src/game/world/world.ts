import { Camera } from "../core/camera";
import { Renderer } from "../core/renderer";
import { Scene } from "../core/scene";
import WorldManager from "./world.manager";
import WorldEvents from "./world.events";
import { EventTypes, STEP } from "./world.config";

type WorldProps = {
    canvas: HTMLCanvasElement | null
    uiCanvas: HTMLCanvasElement | null
    gameOverCallback: () => void
    gameWinCallback: () => void
};

// Игровой мир
export class World {
    canvas: HTMLCanvasElement | null;
    uiCanvas: HTMLCanvasElement | null;
    renderer: Renderer;
    // Управление анимацией рендеринга
    animationNumber: number | undefined;
    scene: Scene;
    camera: Camera;

    // Callback to interact with GUI
    gameOverCallback: () => void;
    gameWinCallback: () => void;

    /**
       Инициализирует world и начинает анимацию
    */
    init(props: WorldProps) {
        this.canvas = props.canvas;
        this.uiCanvas = props.uiCanvas;
        this.gameOverCallback = props.gameOverCallback;
        this.gameWinCallback = props.gameWinCallback;

        // Создаем Renderer
        this.renderer = new Renderer({
            canvas: this.canvas,
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // World Manager
        [this.scene, this.camera] = WorldManager.composeLevel(
            this.gameOverCallback,
            this.gameWinCallback,
        );

        // Создаем playerUI
        if(this.uiCanvas) {
            WorldManager.composeUIScene(this.uiCanvas)
        }

        // Подписываемся на событие ресайз
        WorldEvents.on(EventTypes.Resize, this._onResize)
        // Начинаем анимацию
        this.startAnimataion();
    }

    startAnimataion() {
        let dt = 0; // определяем текущее время
        let last = performance.now(); // в этой переменной сохраняем время вызова предыдущего кадра

        const render = () => {
            this.animationNumber = requestAnimationFrame(() => render());
            // определяем текущее время
            const now = performance.now();
            // добавляем прошедшую разницу во времени
            dt += Math.min(1, (now - last) / 1000); // исправление проблемы неактивных вкладок
            while (dt > STEP) {
                // вложенный цикл может вызывать обновление состояния несколько раз подряд
                // если прошло больше времени, чем выделено на один кадр
                dt -= STEP;
                // Обновляем состояние каждый STEP
                this.renderer.prerender(this.scene);
                // TODO: Реализовать логику camera без привязки к объекту
                // this.camera.update()
            }
            // сохраняем время отрисовки последнего кадра
            last = now;
            // Рендерим основной мир
            this.renderer.render(this.scene, this.camera);
            // Рендерим UI поверх
            WorldManager.playerUI?.renderer.render(
                WorldManager.playerUI.scene,
                WorldManager.playerUI.camera,
            );
        };

        render();
    }

    stopAnimation() {
        if (this.animationNumber) {
            cancelAnimationFrame(this.animationNumber);
            this.animationNumber = undefined;
        }
    }

    private _onResize() {
        if (this.canvas && this.animationNumber) {
            this.canvas.height = window.innerHeight;
            this.canvas.width = window.innerWidth;
            if(this.uiCanvas) {
                this.uiCanvas.height = window.innerHeight;
                this.uiCanvas.width = window.innerWidth;
            }
        }
    }

    destroy() {
        this.stopAnimation();
    }
}
