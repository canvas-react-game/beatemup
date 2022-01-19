import { Object2D, Object2DProps } from "../../core/object";
import { EventBus, EventTypes } from "../../core/eventBus";
import { Collidable } from "../../core/physics/physics";
import { WorldManager } from "../world.manager";
import Physics from "../../core/physics/physics"
import { Vector2D } from "game/core/utils/vector";
import { MoveAnimation } from "../../core/animations/move/moveAnimation";
import { AnimationSprites, SpriteAnimation } from "../../core/animations/sprite/spriteAnimation";

type PlayerProps = Object2DProps & {
    eventBus: EventBus;
    worldManager: WorldManager;
    image?: HTMLImageElement;
};

export class Player extends Object2D implements Collidable {
    // Скорость передвижения пиксель/сек
    speed: number = 150;
    // Global event bus
    eventBus: EventBus;
    //
    worldManager: WorldManager;
    //
    moveAnimation: MoveAnimation;
    prevPosition: Vector2D;
    //
    canCollide: boolean = true;
    //
    spriteAnimation: SpriteAnimation;
    playerSprites: AnimationSprites;

    constructor(props: PlayerProps) {
        super(props);

        this.eventBus = props.eventBus;
        this.worldManager = props.worldManager;

        this._createPlayerSprites(props.image);
        this.init();
    }

    init() {
        // Создаем логику анимации движения
        this.moveAnimation = new MoveAnimation({
            speed: this.speed,
        })
        this.moveStateUpdateCondition();
        // Создаем логику анимации смены sprite
        this.spriteAnimation = new SpriteAnimation({
            sprites: this.playerSprites
        })
    }

    updateState() {
        // Обновляем sprite
        this.spriteConfig = this.spriteAnimation.update(this.spriteConfig, this.moveAnimation)
        // Обновляем position
        this.prevPosition = this.position.copy();
        this.position = this.moveAnimation.update(this.position);
    }

    // NOTE: Если скорость объекта значительно больше размера препятствия, то
    // может случиться "проскок" объекта
    onCollide(obstacle: Object2D & Collidable) {
        this.position = Physics.getNewPositionAfterWallCollision(
            this,
            obstacle,
            this.moveAnimation,
            this.prevPosition
        )
    }

    moveStateUpdateCondition() {
        const moveState = this.moveAnimation.moveState
        //
        this.eventBus.on(
            EventTypes.ArrowLeftDown,
            () => (moveState.isMovingLeft = true),
        );
        this.eventBus.on(
            EventTypes.ArrowBottomDown,
            () => (moveState.isMovingDown = true),
        );
        this.eventBus.on(
            EventTypes.ArrowTopDown,
            () => (moveState.isMovingTop = true),
        );
        this.eventBus.on(
            EventTypes.ArrowRightDown,
            () => (moveState.isMovingRight = true),
        );
        this.eventBus.on(
            EventTypes.ArrowLeftUp,
            () => (moveState.isMovingLeft = false),
        );
        this.eventBus.on(
            EventTypes.ArrowTopUp,
            () => (moveState.isMovingTop = false),
        );
        this.eventBus.on(
            EventTypes.ArrowBottomUp,
            () => (moveState.isMovingDown = false),
        );
        this.eventBus.on(
            EventTypes.ArrowRightUp,
            () => (moveState.isMovingRight = false),
        );
    }
 
    private _createPlayerSprites(image?: HTMLImageElement) {
        this.playerSprites = {
            idle_0: {
                sx: 128,
                sy: 107,
                sWidth: 16,
                sHeight: 21,
            },
            idle_1: {
                sx: 128 + 16,
                sy: 107,
                sWidth: 16,
                sHeight: 21,
            },
            idle_2: {
                sx: 128 + 16 * 2,
                sy: 107,
                sWidth: 16,
                sHeight: 21,
            },
            idle_3: {
                sx: 128 + 16 * 3,
                sy: 107,
                sWidth: 16,
                sHeight: 21,
            },
            run_0: {
                sx: 192,
                sy: 107,
                sWidth: 16,
                sHeight: 21,
            },
            run_1: {
                sx: 192 + 16,
                sy: 107,
                sWidth: 16,
                sHeight: 21,
            },
            run_2: {
                sx: 192 + 16*2,
                sy: 107,
                sWidth: 16,
                sHeight: 21,
            },
            run_3: {
                sx: 192 + 16*3,
                sy: 107,
                sWidth: 16,
                sHeight: 21,
            },
        };
        // Устанавливаем дефолтный спрайт
        this.spriteConfig = {
            image,
            sprite: this.playerSprites.idle_0,
            shouldFlip: false
        };
    }
}
