import { Object2D, Object2DProps } from "../../core/object";
import { EventBus, EventTypes } from "../../core/eventBus";
import { Collidable } from "../../core/physics/physics";
import { Box2 } from "../../core/utils/box2";
import { Sprite } from "../world.manager";

type PlayerProps = Object2DProps & {
    eventBus: EventBus;
    image?: HTMLImageElement;
};

type MoveState = {
    isMovingLeft: boolean;
    isMovingRight: boolean;
    isMovingTop: boolean;
    isMovingDown: boolean;
};

type PlayerSprites = {
    idle_0: Sprite,
    idle_1: Sprite,
    idle_2: Sprite,
    idle_3: Sprite,
}

export class Player extends Object2D implements Collidable {
    // Скорость передвижения пиксель/сек
    speed: number = 150;
    // Global event bus
    eventBus: EventBus;
    // Флаги состояния передвижения
    moveState: MoveState;
    //
    canCollide: boolean = true;
    //
    playerSprites: PlayerSprites

    constructor(props: PlayerProps) {
        super(props);

        this.eventBus = props.eventBus;
        this.moveState = {
            isMovingLeft: false,
            isMovingRight: false,
            isMovingTop: false,
            isMovingDown: false,
        };

        this._createPlayerSprites(props.image);
        this.init();
    }

    init() {        
        this.eventBus.on(
            EventTypes.ArrowLeftDown,
            () => (this.moveState.isMovingLeft = true),
        );
        this.eventBus.on(
            EventTypes.ArrowBottomDown,
            () => (this.moveState.isMovingDown = true),
        );
        this.eventBus.on(
            EventTypes.ArrowTopDown,
            () => (this.moveState.isMovingTop = true),
        );
        this.eventBus.on(
            EventTypes.ArrowRightDown,
            () => (this.moveState.isMovingRight = true),
        );
        this.eventBus.on(
            EventTypes.ArrowLeftUp,
            () => (this.moveState.isMovingLeft = false),
        );
        this.eventBus.on(
            EventTypes.ArrowTopUp,
            () => (this.moveState.isMovingTop = false),
        );
        this.eventBus.on(
            EventTypes.ArrowBottomUp,
            () => (this.moveState.isMovingDown = false),
        );
        this.eventBus.on(
            EventTypes.ArrowRightUp,
            () => (this.moveState.isMovingRight = false),
        );
    }

    updateState(dt: number) {
        const delta = (dt / 1000) * this.speed;

        if (this.moveState.isMovingDown) {
            this.position.y += delta;
        }
        if (this.moveState.isMovingTop) {
            this.position.y -= delta;
        }
        if (this.moveState.isMovingRight) {
            this.position.x += delta;
        }
        if (this.moveState.isMovingLeft) {
            this.position.x -= delta;
        }
    }

    isMoving(): boolean {
        return Object.values(this.moveState).reduce(
            (res, val) => res || val,
            false,
        );
    }

    // NOTE: Если скорость объекта значительно больше размера препятствия, то
    // может случиться "проскок" объекта
    // TODO: Переписать логику столкновения
    // потому что это работает, но с багами при соприкосновении с углами стен
    onCollide(obstacle: Object2D & Collidable) {
    // Края объекта не должны пересекаться с bounding box obstacle
        const objGeomBB = this.geometry.boundingBox as Box2;
        const obstGeomBB = obstacle.geometry.boundingBox as Box2;
        const {
            isMovingRight, isMovingLeft, isMovingDown, isMovingTop,
        } = this.moveState;
        if (this.isMoving()) {
            if (
                isMovingRight
        && objGeomBB.max.x > obstacle.position.x
        && this.position.x < obstacle.position.x
            ) {
                this.position.x -= objGeomBB.max.x - obstacle.position.x;
            }
            if (
                isMovingLeft
        && this.position.x < obstGeomBB.max.x
        && objGeomBB.max.x > obstGeomBB.max.x
            ) {
                this.position.x += obstGeomBB.max.x - this.position.x;
            }
            if (
                isMovingDown
        && objGeomBB.max.y > obstacle.position.y
        && this.position.y < obstacle.position.y
            ) {
                this.position.y -= objGeomBB.max.y - obstacle.position.y;
            }
            if (
                isMovingTop
        && this.position.y < obstGeomBB.max.y
        && objGeomBB.max.y > obstGeomBB.max.y
            ) {
                this.position.y += obstGeomBB.max.y - this.position.y;
            }
        }
    }

    private _createPlayerSprites(image?: HTMLImageElement) {
        this.playerSprites = {
            idle_0: {
                image: image,
                sx: 128,
                sy: 100,
                sWidth: 16,
                sHeight: 28
            },
            idle_1: {
                image: image,
                sx: 128+16,
                sy: 100,
                sWidth: 16,
                sHeight: 28
            },
            idle_2: {
                image: image,
                sx: 128+16*2,
                sy: 100,
                sWidth: 16,
                sHeight: 28
            },
            idle_3: {
                image: image,
                sx: 128+16*3,
                sy: 100,
                sWidth: 16,
                sHeight: 28
            },
        }
        // Устанавливаем дефолтный спрайт
        this.sprite = this.playerSprites.idle_0
    }

    // private _updateSpritesImage(image: HTMLImageElement) {
    //     for(let value of Object.values(this.playerSprites)) {
    //         value.image = image
    //     }
    // }
}
