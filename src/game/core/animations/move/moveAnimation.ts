import { Vector2D } from "../../utils/vector";
import { STEP } from "../../../world/world.config";
import { GameAnimation } from "../animation";

type MoveAnimationProps = {
    speed: number
}

export type MoveState = {
    isMovingLeft: boolean;
    isMovingRight: boolean;
    isMovingTop: boolean;
    isMovingDown: boolean;
};

export class MoveAnimation extends GameAnimation {
    moveState: MoveState;
    speed: number
    
    constructor(props: MoveAnimationProps) {
        super()
        this.speed = props.speed;
        //
        this.moveState = {
            isMovingLeft: false,
            isMovingRight: false,
            isMovingTop: false,
            isMovingDown: false,
        };
        //
    }

    update(position: Vector2D): Vector2D {
        const delta = STEP * this.speed;
        if (this.moveState.isMovingDown) {
            position.y += delta;
        }
        if (this.moveState.isMovingTop) {
            position.y -= delta;
        }
        if (this.moveState.isMovingRight) {
            position.x += delta;
        }
        if (this.moveState.isMovingLeft) {
            position.x -= delta;
        }
        return position;
    }

    isMoving(): boolean {
        return Object.values(this.moveState).reduce(
            (res, val) => res || val,
            false,
        );
    }

}