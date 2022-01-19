import { STEP } from "../../../world/world.config";
import { GameAnimation } from "../animation";
import { ObjectSpriteConfig } from "game/core/object";
import { Sprite } from "game/world/world.manager";
import { MoveAnimation } from "../move/moveAnimation";

type SpriteAnimationProps = {
    sprites: AnimationSprites
}

export type AnimationSprites = {
    idle_0: Sprite,
    idle_1: Sprite,
    idle_2: Sprite,
    idle_3: Sprite,
    run_0: Sprite,
    run_1: Sprite,
    run_2: Sprite,
    run_3: Sprite,
};

export class SpriteAnimation extends GameAnimation {
    timeAfterLastSpriteUpdate: number; // in ms 
    sprites: AnimationSprites

    constructor(props: SpriteAnimationProps) {
        super()
        this.sprites = props.sprites;
        this.timeAfterLastSpriteUpdate = 0;
    }

    update(spriteConfig: ObjectSpriteConfig | null, moveAnimation: MoveAnimation): ObjectSpriteConfig | null {
        this.timeAfterLastSpriteUpdate += STEP;
        const shouldUpdateSprite = this.shouldUpdateSprite();
        if(spriteConfig && shouldUpdateSprite) {
            const isMoving = moveAnimation.isMoving()
            const isCurrentSpriteIdle = this.isCurrentSpriteIdle(spriteConfig)
            if(isMoving) {
                if(isCurrentSpriteIdle) {
                    spriteConfig.sprite = this.sprites.run_0
                }
                else {
                    spriteConfig.sprite = this.getNextRunSprite(spriteConfig)
                }
            }
            else {
                if(!isCurrentSpriteIdle) {
                    spriteConfig.sprite = this.sprites.idle_0
                }
                else {
                    spriteConfig.sprite = this.getNextIdleSprite(spriteConfig)
                }
            }        
        }
        // NOTE: Обновляем shouldFlip после установки нового спрайта
        if(spriteConfig) {
            if(moveAnimation.moveState.isMovingRight) {
                spriteConfig.shouldFlip = false
            }
            if(moveAnimation.moveState.isMovingLeft) {
                spriteConfig.shouldFlip = true
            }
        }
        return spriteConfig
    }

    shouldUpdateSprite(): boolean {
        // Обновляем 12 раз в секунду
        if(this.timeAfterLastSpriteUpdate > 5 * STEP) {
            this.timeAfterLastSpriteUpdate = 0
            return true
        }
        return false
    }

    isCurrentSpriteIdle(spriteConfig: ObjectSpriteConfig): boolean {
        const sprite = spriteConfig?.sprite
        return sprite === this.sprites.idle_0 ||
                sprite === this.sprites.idle_1 ||
                sprite === this.sprites.idle_2 ||
                sprite === this.sprites.idle_3
    }

    getNextRunSprite(spriteConfig: ObjectSpriteConfig): Sprite {
        const sprite = spriteConfig?.sprite
        switch(sprite) {
            case this.sprites.run_0:
                return this.sprites.run_1
            case this.sprites.run_1:
                return this.sprites.run_2
            case this.sprites.run_2:
                return this.sprites.run_3
            case this.sprites.run_3:
                return this.sprites.run_0
            default:
                return this.sprites.run_0                                            
        }
    }

    getNextIdleSprite(spriteConfig: ObjectSpriteConfig): Sprite {
        const sprite = spriteConfig?.sprite
        switch(sprite) {
            case this.sprites.idle_0:
                return this.sprites.idle_1
            case this.sprites.idle_1:
                return this.sprites.idle_2
            case this.sprites.idle_2:
                return this.sprites.idle_3
            case this.sprites.idle_3:
                return this.sprites.idle_0
            default:
                return this.sprites.idle_0                                            
        }
    }

}