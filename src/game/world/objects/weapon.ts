import { RectangleGeometry } from "game/core/geometry/rectangle/rectangle";
import { Object2D, Object2DProps } from "../../core/object";
import { Collidable } from "../../core/physics/physics";

type WeaponProps = Object2DProps & {
    geometry: RectangleGeometry,
    damage: number // Сколько жизней отнимает
};

export class Weapon extends Object2D implements Collidable {
    canCollide: boolean = true;
    active: boolean; // Наносит ли урон в данный момент времени
    damage: number;
    attackCount: number; // Количество атак и номер текущей атаки

    constructor(props: WeaponProps) {
        super(props);
        this.damage = props.damage;
        this.active = false;
        this.attackCount = 0;
        this.init();
    }

    init() {

    }

    onCollide() {
        // console.log(`В стену ${this.id} кто-то врезался :(`);
    }
}
