import { Object2D, Object2DProps } from "../../core/object";
import { Sprite } from "../world.manager";

type HealthProps = Object2DProps & {
    tileSetImage: HTMLImageElement
    isHalf?: boolean // Половинка здоровья
    isEmpty?: boolean // Половинка здоровья
};

const HEALTH_SPITE: Sprite = {
    sx: 288,
    sy: 256,
    sWidth: 16,
    sHeight: 16,    
}

const HALF_HEALTH_SPITE: Sprite = {
    sx: 304,
    sy: 256,
    sWidth: 16,
    sHeight: 16,    
}

const EMPTY_HEALTH_SPITE: Sprite = {
    sx: 320,
    sy: 256,
    sWidth: 16,
    sHeight: 16,    
}

export class Health extends Object2D {
    tileSetImage: HTMLImageElement
    isHalf: boolean
    isEmpty: boolean

    constructor(props: HealthProps) {
        super(props);
        this.isHalf = Boolean(props.isHalf)
        this.isEmpty = Boolean(props.isEmpty)
        this.tileSetImage = props.tileSetImage
        this.init();
    }

    init() {
        this.spriteConfig = { 
            image: this.tileSetImage, 
            sprite: this.isHalf ? HALF_HEALTH_SPITE :
                    this.isEmpty ? EMPTY_HEALTH_SPITE :
                                    HEALTH_SPITE
        }
    }
}
