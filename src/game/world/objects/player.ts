import { Object2D, Object2DProps } from "../../core/object";
import { EventBus, EventTypes } from "../../core/eventBus";
import { Collidable } from "../../core/physics/physics";
import { Sprite, WorldManager } from "../world.manager";
import { RectangleGeometry } from "game/core/geometry/rectangle/rectangle";
import { Box2 } from "game/core/utils/box2";
import Physics from "../../core/physics/physics"
import { Vector2D } from "game/core/utils/vector";

type PlayerProps = Object2DProps & {
    eventBus: EventBus;
    worldManager: WorldManager;
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
    run_0: Sprite,
    run_1: Sprite,
    run_2: Sprite,
    run_3: Sprite,
};

export class Player extends Object2D implements Collidable {
    // Скорость передвижения пиксель/сек
    speed: number = 150;
    // Global event bus
    eventBus: EventBus;
    //
    worldManager: WorldManager;
    // Флаги состояния передвижения
    moveState: MoveState;
    lastDelta: number;
    prevPosition: Vector2D;
    //
    canCollide: boolean = true;
    //
    playerSprites: PlayerSprites;
    timeAfterLastSpriteUpdate: number; // in ms 

    constructor(props: PlayerProps) {
        super(props);

        this.eventBus = props.eventBus;
        this.worldManager = props.worldManager;
        this.moveState = {
            isMovingLeft: false,
            isMovingRight: false,
            isMovingTop: false,
            isMovingDown: false,
        };
        this.timeAfterLastSpriteUpdate = 0;

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
        // Update sprite
        this.timeAfterLastSpriteUpdate += dt;
        const shouldUpdateSprite = this._shouldUpdateSprite();
        if(this.spriteConfig && shouldUpdateSprite) {
            const isMoving = this.isMoving()
            const isCurrentSpriteIdle = this._isCurrentSpriteIdle()
            if(isMoving) {
                if(isCurrentSpriteIdle) {
                    this.spriteConfig.sprite = this.playerSprites.run_0
                }
                else {
                    this.spriteConfig.sprite = this._getNextRunSprite()
                }
            }
            else {
                if(!isCurrentSpriteIdle) {
                    this.spriteConfig.sprite = this.playerSprites.idle_0
                }
                else {
                    this.spriteConfig.sprite = this._getNextIdleSprite()
                }
            }        
        }
        // NOTE: Обновляем shouldFlip после установки нового спрайта
        if(this.spriteConfig) {
            if(this.moveState.isMovingRight) {
                this.spriteConfig.shouldFlip = false
            }
            if(this.moveState.isMovingLeft) {
                this.spriteConfig.shouldFlip = true
            }
        }
        // Обновляем position
        this.prevPosition = this.position.copy();
        const delta = (dt / 1000) * this.speed;
        this.lastDelta = delta;
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
    onCollide(obstacle: Object2D & Collidable) {
        // Края объекта не должны пересекаться с bounding box obstacle
        const objGeom = this.geometry as RectangleGeometry;
        const obstGeomBB = obstacle.geometry.boundingBox as Box2;
        const {
            isMovingRight, isMovingLeft, isMovingDown, isMovingTop,
        } = this.moveState;
        // Сохраняем текущую позицию (позиция после движения)
        const position = this.position.copy()
        // Общая идея в том, чтобы определить в следствие какого движения произошло столкновение
        // Для этого мы берем предыдущую позицию и проверяем произойдет ли столкновение
        // если передвинуться на расчетное значение delta
        // Если столкновение произойдет, то пересчитываем позицию
        // иначе восстанавливаем текущую позицию
        if (isMovingRight) {
            // Устанавливаем предыдущую позицию
            this.position = this.prevPosition.copy();
            // Делаем шаг вправо
            this.position.x += this.lastDelta;
            // Проверяем стало ли это причиной столкновения
            const isCollisionCause = Physics.hasBox2DCollided(this, obstacle)
            if(isCollisionCause) {
                // Обновляем координаты если стало
                this.position.x = obstacle.position.x - objGeom.width;
                this.position.y = position.y
                // Дальше не идем, иначе восстановим случайно позицию
                return
            }
            else {
                // Восстанавливаем позицию
                this.position = position;
            }
        }
        if (isMovingDown) {
            this.position = this.prevPosition.copy();
            this.position.y += this.lastDelta;
            const isCollisionCause = Physics.hasBox2DCollided(this, obstacle)
            if(isCollisionCause) {
                this.position.x = position.x
                this.position.y = obstGeomBB.min.y - objGeom.height;
                return
            }
            else {
                this.position = position;
            }
        }
        if (isMovingLeft) {
            this.position = this.prevPosition.copy();
            this.position.x -= this.lastDelta;
            const isCollisionCause = Physics.hasBox2DCollided(this, obstacle)
            if(isCollisionCause) {
                this.position.x = obstGeomBB.max.x;
                this.position.y = position.y
                return
            }
            else {
                this.position = position;
            }
        }
        if (isMovingTop) {
            this.position = this.prevPosition.copy();
            this.position.y -= this.lastDelta;
            const isCollisionCause = Physics.hasBox2DCollided(this, obstacle)
            if(isCollisionCause) {
                this.position.x = position.x
                this.position.y = obstGeomBB.max.y;
                return
            }
            else {
                this.position = position;
            }
        }
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

    private _shouldUpdateSprite(): boolean {
        if(this.timeAfterLastSpriteUpdate > 100) {
            this.timeAfterLastSpriteUpdate = 0
            return true
        }
        return false
    }

    private _isCurrentSpriteIdle(): boolean {
        const sprite = this.spriteConfig?.sprite
        return sprite === this.playerSprites.idle_0 ||
                sprite === this.playerSprites.idle_1 ||
                sprite === this.playerSprites.idle_2 ||
                sprite === this.playerSprites.idle_3
    }

    private _getNextRunSprite(): Sprite {
        const sprite = this.spriteConfig?.sprite
        switch(sprite) {
            case this.playerSprites.run_0:
                return this.playerSprites.run_1
            case this.playerSprites.run_1:
                return this.playerSprites.run_2
            case this.playerSprites.run_2:
                return this.playerSprites.run_3
            case this.playerSprites.run_3:
                return this.playerSprites.run_0
            default:
                return this.playerSprites.run_0                                            
        }
    }

    private _getNextIdleSprite(): Sprite {
        const sprite = this.spriteConfig?.sprite
        switch(sprite) {
            case this.playerSprites.idle_0:
                return this.playerSprites.idle_1
            case this.playerSprites.idle_1:
                return this.playerSprites.idle_2
            case this.playerSprites.idle_2:
                return this.playerSprites.idle_3
            case this.playerSprites.idle_3:
                return this.playerSprites.idle_0
            default:
                return this.playerSprites.idle_0                                            
        }
    }
}
