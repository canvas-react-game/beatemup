import { Camera } from "../core/camera";
import { Renderer } from "../core/renderer";
import { Scene } from "../core/scene";
import { EventBus, EventTypes, KeyboardEvents } from "../core/eventBus";
import { WorldManager } from "./world.manager";

type KeyListener = (this: Window, ev: KeyboardEvent) => any;
type Listener = (this: Window, ev: Event) => any;

type WorldProps = {
    canvas: HTMLCanvasElement | null
    gameOverCallback: () => void
};

// Игровой мир
export class World {
    canvas: HTMLCanvasElement | null;
    renderer: Renderer;
    scene: Scene;
    camera: Camera;
    manager: WorldManager;

    eventBus: EventBus;

    // Управление анимацией
    animationNumber: number | undefined;

    // События, от которых нужно отписаться
    private _keyDownListener: KeyListener;
    private _keyUpListener: KeyListener;
    private _resizeListener: Listener;

    // Gameover callback to interact with GUI
    gameOverCallback: () => void;

    /**
       Инициализирует world и начинает анимацию
    */
    init(props: WorldProps) {
        this.canvas = props.canvas;
        this.gameOverCallback = props.gameOverCallback;
        this.eventBus = new EventBus();

        // Создаем Renderer
        this.renderer = new Renderer({
            canvas: this.canvas,
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // World Manager
        this.manager = new WorldManager();
        [this.scene, this.camera] = this.manager.composeLevel(
            this.gameOverCallback,
            this.eventBus,
        );

        this.registerEvents();
        this.startAnimataion();
    }

    startAnimataion() {
        let last = performance.now();
        const render = () => {
            // NOTE: Важно именно здесь нахождение вызова
            // для корректного cancelAnimationFrame
            this.animationNumber = requestAnimationFrame(() => render());
            const now = performance.now();
            const dt = now - last;
            last = now;
            this.renderer.prerender(this.scene, dt, now);
            // TODO: Реализовать класс camera
            // this.camera.update()
            this.renderer.render(this.scene, this.camera);
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
                default:
                    break;
            }
        };

        this._resizeListener = (e: Event) => {
            this.renderer.resize(window.innerHeight, window.innerWidth)
        }

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
