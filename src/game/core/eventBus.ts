// Список всех событий в игре
export enum EventTypes {
    ArrowLeftDown = "ArrowLeftDown",
    ArrowTopDown = "ArrowTopDown",
    ArrowBottomDown = "ArrowBottomDown",
    ArrowRightDown = "ArrowRightDown",
    ArrowLeftUp = "ArrowLeftUp",
    ArrowTopUp = "ArrowTopUp",
    ArrowBottomUp = "ArrowBottomUp",
    ArrowRightUp = "ArrowRightUp",
}

export enum KeyboardEvents {
    ArrowLeft = "ArrowLeft",
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowRight = "ArrowRight",
}

// Класс, управляющий всеми событиями в игре
// Например, для player если в prerender фиксируются зажатые клавишы передвижения, то
// на основе пройденного времени нужно пересчитать перемещение объекта (+ скорость)
// то есть пересчитать положение
export class EventBus {
    private _listeners: Map<string, Array<Function>>;

    constructor() {
        this._listeners = new Map();
    }

    on(event: string, callback: Function): void {
        const events = this._listeners.get(event) || [];
        events.push(callback);
        this._listeners.set(event, events);
    }

    off(event: string, callback: Function): void {
        const events = this._listeners.get(event);

        if (!events) {
            return;
        }

        this._listeners.set(event, events.filter((listener) => listener !== callback));
    }

    emit(event: string, ...args: unknown[]) {
        const events = this._listeners.get(event);

        if (!events) {
            return;
        }
        events.forEach((listener) => {
            listener(...args);
        });
    }
}
