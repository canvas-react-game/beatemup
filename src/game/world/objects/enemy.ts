import { CanReceiveDamage } from "game/core/animations/damage/damage";
import { Scene } from "game/core/scene";
import { MoveAnimation } from "../../core/animations/move/moveAnimation";
import { AnimationSprites, SpriteAnimation } from "../../core/animations/sprite/spriteAnimation";
import { Vector2D } from "../../core/utils/vector";
import { Object2D, Object2DProps } from "../../core/object";
import { Collidable } from "../../core/physics/physics";
import { Player } from "./player";
import { Weapon } from "./weapon";

type EnemyProps = Object2DProps & {
    scene: Scene;
    maxHealth: number;
    image?: HTMLImageElement
    gameWinCallback: () => void
};

export class Enemy extends Object2D implements Collidable, CanReceiveDamage {
    scene: Scene;
    gameWinCallback: () => void;
    canCollide: boolean = true;
    //
    speed: number = 0;
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
        this.gameWinCallback = props.gameWinCallback;
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
        this.position = this.moveAnimation.update(this.position);
    }

    //
    onCollide(obstacle: Object2D & Collidable) {
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
        this.gameWinCallback();
    }

    // TODO: AI
    moveStateUpdateCondition() {
        // const moveState = this.moveAnimation.moveState
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
