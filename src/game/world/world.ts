import { Camera } from "../core/camera";
import { Renderer } from "../core/renderer";
import { Scene } from "../core/scene";
import { EventBus } from "../core/eventBus";
import WorldManager from "./world.manager";
import { EventTypes, KeyboardEvents, STEP } from "./world.config";

type KeyListener = (this: Window, ev: KeyboardEvent) => any;
type Listener = (this: Window, ev: Event) => any;

type WorldProps = {
    canvas: HTMLCanvasElement | null
    gameOverCallback: () => void
    gameWinCallback: () => void
};

// Игровой мир
export class World {
    canvas: HTMLCanvasElement | null;
    renderer: Renderer;
    // Управление анимацией рендеринга
    animationNumber: number | undefined;
    scene: Scene;
    camera: Camera;
    // Управление событиями в игре
    eventBus: EventBus;
    // События, от которых нужно отписаться
    private _keyDownListener: KeyListener;
    private _keyUpListener: KeyListener;
    private _resizeListener: Listener;

    // Callback to interact with GUI
    gameOverCallback: () => void;
    gameWinCallback: () => void;

    /**
       Инициализирует world и начинает анимацию
    */
    init(props: WorldProps) {
        this.canvas = props.canvas;
        this.gameOverCallback = props.gameOverCallback;
        this.gameWinCallback = props.gameWinCallback;
        this.eventBus = new EventBus();

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
            this.eventBus,
        );

        // Вставляем canvas playerUI
        this.canvas?.parentElement?.appendChild(WorldManager.playerUI.canvas)

        this.registerEvents();
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
            WorldManager.playerUI.renderer.render(
                WorldManager.playerUI.scene,
                WorldManager.playerUI.camera,
            )
        };

        render();
    }

    stopAnimation() {
        if (this.animationNumber) {
            cancelAnimationFrame(this.animationNumber);
        }
    }

    registerEvents() {
        const eventBus = this.eventBus as EventBus;

        this._keyDownListener = (e: KeyboardEvent) => {
            switch (e.key) {
                case KeyboardEvents.ArrowDown:
                    eventBus.emit(EventTypes.ArrowBottomDown);
                    break;
                case KeyboardEvents.ArrowLeft:
                    eventBus.emit(EventTypes.ArrowLeftDown);
                    break;
                case KeyboardEvents.ArrowRight:
                    eventBus.emit(EventTypes.ArrowRightDown);
                    break;
                case KeyboardEvents.ArrowUp:
                    eventBus.emit(EventTypes.ArrowTopDown);
                    break;
                case KeyboardEvents.Space:
                    eventBus.emit(EventTypes.SpaceDown);
                    break;
                default:
                    break;
            }
        };

        this._keyUpListener = (e: KeyboardEvent) => {
            switch (e.key) {
                case KeyboardEvents.ArrowDown:
                    eventBus.emit(EventTypes.ArrowBottomUp);
                    break;
                case KeyboardEvents.ArrowLeft:
                    eventBus.emit(EventTypes.ArrowLeftUp);
                    break;
                case KeyboardEvents.ArrowRight:
                    eventBus.emit(EventTypes.ArrowRightUp);
                    break;
                case KeyboardEvents.ArrowUp:
                    eventBus.emit(EventTypes.ArrowTopUp);
                    break;
                case KeyboardEvents.Space:
                    eventBus.emit(EventTypes.SpaceUp);
                    break;
                default:
                    break;
            }
        };

        this._resizeListener = (e: Event) => {
            if(this.canvas) {
                this.canvas.height = window.innerHeight;
                this.canvas.width = window.innerWidth;
                WorldManager.playerUI.canvas.height = window.innerHeight;
                WorldManager.playerUI.canvas.width = window.innerWidth;
            }
        };

        window.addEventListener("keydown", this._keyDownListener);
        window.addEventListener("keyup", this._keyUpListener);
        window.addEventListener("resize", this._resizeListener);
    }

    destroy() {
        this.stopAnimation();
        window.removeEventListener("keydown", this._keyDownListener);
        window.removeEventListener("keyup", this._keyUpListener);
        window.removeEventListener("resize", this._resizeListener);
    }
}
