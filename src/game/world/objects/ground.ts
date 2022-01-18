import { Object2D, Object2DProps } from "../../core/object";

type GroundProps = Object2DProps & {

};

export class Ground extends Object2D {
    constructor(props: GroundProps) {
        super(props);
        this.init();
    }

    init() {

    }
}
