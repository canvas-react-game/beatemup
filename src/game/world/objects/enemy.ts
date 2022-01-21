import { CanReceiveDamage } from "game/core/animations/damage/damage";
import { Scene } from "game/core/scene";
import { MoveAnimation } from "../../core/animations/move/moveAnimation";
import { AnimationSprites, SpriteAnimation } from "../../core/animations/sprite/spriteAnimation";
import { Vector2D } from "../../core/utils/vector";
import { Object2D, Object2DProps } from "../../core/object";
import Physics, { Collidable } from "../../core/physics/physics";
import { Player } from "./player";
import { Weapon } from "./weapon";
import { Directions, getRandomDirection } from "../world.helpers";
import { Wall } from "./wall";
import WorldManager from "../world.manager";

type EnemyProps = Object2DProps & {
    scene: Scene;
    maxHealth: number;
    image?: HTMLImageElement
};

const ENEMY_MOVE_DIRECTIONS: Directions = {
    left: { name: "left", chance: 0.25 },
    right: { name: "right", chance: 0.25 },
    down: { name: "down", chance: 0.25 },
    top: { name: "top", chance: 0.25 },
};

export class Enemy extends Object2D implements Collidable, CanReceiveDamage {
    scene: Scene;
    canCollide: boolean = true;
    //
    speed: number = 50;
    moveAnimation: MoveAnimation;
    prevPosition: Vector2D;
    //
    spriteAnimation: SpriteAnimation;
    enemySprites: AnimationSprites;
    //
    prevRecievedDamage: number;
    // Здоровье
    maxHealth: number;
    private _health: number;
    // Частота обновления позиции
    currentMoveStateCounter: number = 0;
    maxMoveStateUpdate: number = 30;

    // TODO: Додумать реализацию
    get health(): number {
        return this._health;
    }
    set health(value: number) {
        this._health = value;
        if (this._health <= 0) {
            this.onDeath();
        }
    }

    constructor(props: EnemyProps) {
        super(props);

        this.scene = props.scene;
        this.maxHealth = props.maxHealth;
        this._health = this.maxHealth;
        this._createEnemySprites(props.image);
        this.init();
    }

    init() {
        // Создаем логику анимации движения
        this.moveAnimation = new MoveAnimation({
            speed: this.speed,
        });
        this.moveStateUpdateCondition();
        // Создаем логику анимации смены sprite
        this.spriteAnimation = new SpriteAnimation({
            sprites: this.enemySprites,
        });
    }

    updateState() {
        // Обновляем sprite
        this.spriteConfig = this.spriteAnimation.update(this.spriteConfig, this.moveAnimation);
        // Обновляем position
        this.prevPosition = this.position.copy();
        this.moveStateUpdateCondition();
        this.position = this.moveAnimation.update(this.position);
    }

    //
    onCollide(obstacle: Object2D & Collidable) {
        if (obstacle instanceof Wall) {
            this.position = Physics.getNewPositionAfterWallCollision(
                this,
                obstacle,
                this.moveAnimation,
                this.prevPosition,
            );
        }
        if (obstacle instanceof Player) {
            obstacle.health -= 0.5;
            console.log("Здоровье игрока: ", obstacle.health);
        }
        if (obstacle instanceof Weapon && obstacle.active) {
            if (this.prevRecievedDamage !== obstacle.attackCount) {
                this.health -= obstacle.damage;
                console.log("Здоровье enemy: ", this.health);
                this.prevRecievedDamage = obstacle.attackCount;
            }
        }
    }

    onDeath() {
        this.scene.remove(this);
        const enemiesCount = this.scene.objects.filter((x) => x instanceof Enemy).length;
        if (!enemiesCount) {
            WorldManager.gameWinCallback();
        }
    }

    // TODO: Вынести AI к анимациям
    moveStateUpdateCondition() {
        // Обновляем направление движение раз в 60 / maxMoveStateUpdate сек
        if (this.currentMoveStateCounter < this.maxMoveStateUpdate) {
            this.currentMoveStateCounter += 1;
            return;
        }

        this.currentMoveStateCounter = 0;

        const { moveState } = this.moveAnimation;
        moveState.isMovingDown = false;
        moveState.isMovingLeft = false;
        moveState.isMovingRight = false;
        moveState.isMovingTop = false;
        // Случайным образом выбираем направление и устанавливаем флаг
        const direction = getRandomDirection(ENEMY_MOVE_DIRECTIONS);
        switch (direction) {
            case ENEMY_MOVE_DIRECTIONS.left:
                moveState.isMovingLeft = true;
                break;
            case ENEMY_MOVE_DIRECTIONS.right:
                moveState.isMovingRight = true;
                break;
            case ENEMY_MOVE_DIRECTIONS.down:
                moveState.isMovingDown = true;
                break;
            case ENEMY_MOVE_DIRECTIONS.top:
                moveState.isMovingTop = true;
                break;
            default:
                break;
        }
    }

    private _createEnemySprites(image?: HTMLImageElement) {
        this.enemySprites = {
            idle_0: {
                sx: 368,
                sy: 80,
                sWidth: 16,
                sHeight: 16,
            },
            idle_1: {
                sx: 368 + 16,
                sy: 80,
                sWidth: 16,
                sHeight: 16,
            },
            idle_2: {
                sx: 368 + 16 * 2,
                sy: 80,
                sWidth: 16,
                sHeight: 16,
            },
            idle_3: {
                sx: 368 + 16 * 3,
                sy: 80,
                sWidth: 16,
                sHeight: 16,
            },
            run_0: {
                sx: 432,
                sy: 80,
                sWidth: 16,
                sHeight: 16,
            },
            run_1: {
                sx: 432 + 16,
                sy: 80,
                sWidth: 16,
                sHeight: 16,
            },
            run_2: {
                sx: 432 + 16 * 2,
                sy: 80,
                sWidth: 16,
                sHeight: 16,
            },
            run_3: {
                sx: 432 + 16 * 3,
                sy: 80,
                sWidth: 16,
                sHeight: 16,
            },
        };
        // Устанавливаем дефолтный спрайт
        this.spriteConfig = {
            image,
            sprite: this.enemySprites.idle_0,
            shouldFlip: false,
        };
    }
}
