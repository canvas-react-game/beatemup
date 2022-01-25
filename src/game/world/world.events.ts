import { EventBus } from "../core/eventBus";
import { EventTypes, KeyboardEvents } from "./world.config";

type KeyListener = (this: Window, ev: KeyboardEvent) => any;
type Listener = (this: Window, ev: Event) => any;

class WorldEvents extends EventBus {
    // События, от которых нужно отписаться
    private _keyDownListener: KeyListener;
    private _keyUpListener: KeyListener;
    private _resizeListener: Listener;

    init() {
        const eventBus = this;

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
            eventBus.emit(EventTypes.Resize);
        };

        window.addEventListener("keydown", this._keyDownListener);
        window.addEventListener("keyup", this._keyUpListener);
        window.addEventListener("resize", this._resizeListener);
    }

    unsubscribe() {
        window.removeEventListener("keydown", this._keyDownListener);
        window.removeEventListener("keyup", this._keyUpListener);
        window.removeEventListener("resize", this._resizeListener);
    }
}

export default new WorldEvents();
