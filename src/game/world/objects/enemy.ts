import { Object2D, Object2DProps } from "../../core/object";
import { Collidable } from "../../core/physics/physics";
import { Player } from "./player";

type EnemyProps = Object2DProps & {
    gameOverCallback: () => void
};

export class Enemy extends Object2D implements Collidable {
    canCollide: boolean = true;
    gameOverCallback: () => void;

    constructor(props: EnemyProps) {
        super(props);

        this.gameOverCallback = props.gameOverCallback;
        this.init();
    }

    init() {}

    updateState(dt: number) {}

    //
    onCollide(obstacle: Object2D & Collidable) {
        if (obstacle instanceof Player) {
            this.gameOverCallback();
            console.log("Game over !");
        }
    }
}
