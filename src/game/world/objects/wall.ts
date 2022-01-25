import { Object2D, Object2DProps } from "../../core/object";
import { Collidable } from "../../core/physics/physics";

type WallProps = Object2DProps & {

};

export class Wall extends Object2D implements Collidable {
    canCollide: boolean = true;

    constructor(props: WallProps) {
        super(props);
        this.init();
    }

    init() {

    }

    onCollide() {
        // console.log(`В стену ${this.id} кто-то врезался :(`);
    }
}
