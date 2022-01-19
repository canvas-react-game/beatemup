import { MoveAnimation } from "../../core/animations/move/moveAnimation";
import { AnimationSprites, SpriteAnimation } from "../../core/animations/sprite/spriteAnimation";
import { Vector2D } from "../../core/utils/vector";
import { Object2D, Object2DProps } from "../../core/object";
import { Collidable } from "../../core/physics/physics";
import { Player } from "./player";

type EnemyProps = Object2DProps & {
    gameOverCallback: () => void
    image?: HTMLImageElement
};

export class Enemy extends Object2D implements Collidable {
    canCollide: boolean = true;
    gameOverCallback: () => void;
    //
    speed: number = 0;
    moveAnimation: MoveAnimation;
    prevPosition: Vector2D;
    //
    spriteAnimation: SpriteAnimation;
    enemySprites: AnimationSprites;

    constructor(props: EnemyProps) {
        super(props);

        this.gameOverCallback = props.gameOverCallback;
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
            this.gameOverCallback();
            console.log("Game over !");
        }
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
