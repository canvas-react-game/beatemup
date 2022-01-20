import { GameAnimation } from "../animation";
import { Weapon } from "game/world/objects/weapon";
import { RectangleGeometry } from "game/core/geometry/rectangle/rectangle";
import { Object2D } from "game/core/object";
import { Vector2D } from "../../../core/utils/vector";

export interface CanAttack {
    weapon: Weapon
    attackAnimation: AttackAnimation
}

type AttackAnimationProps = {
    
};

// TODO: Создать разные анимации атаки для разных видов оружия
export class AttackAnimation extends GameAnimation {
    currentRotation: number = 0;
    maxAnimationStep: number = 10;
    maxRotation: number = 2.4;

    constructor(props?: AttackAnimationProps) {
        super();
    }

    // Обновить позиции оружия и анимировать удар, если он активен
    update(weapon: Weapon, object: Object2D): Weapon {
        // Анимация удара
        if(weapon.active) {
            // Нужно ли перевернуть
            const shouldFlip = object.spriteConfig?.shouldFlip
            // Определяем позицию
            const geom = object.geometry as RectangleGeometry
            const x = object.position.x
            const y = object.position.y
            const width = geom.width
            const height = geom.height
            // Позицинируем меч (подобрано)
            // TODO: Баг позиционирования слева и дальности удара !
            let weaponX = x + width * 0.55
            if(shouldFlip) {
                weaponX = x - width * 0.15
            }
            const weaponY = y - height * 0.5
            weapon.position.x = weaponX
            weapon.position.y = weaponY
            // Определяем угол поворота (текущий)
            this.currentRotation += this.maxRotation / this.maxAnimationStep
            // Центром поворота устанавливаем ручку оружия
            const weaponGeom = weapon.geometry as RectangleGeometry
            const center = new Vector2D(weapon.position.x, weapon.position.y + weaponGeom.height)
            weapon.rotateAround(center, this.currentRotation)
            // Конец анимации
            if(this.currentRotation >= this.maxRotation) {
                this.currentRotation = 0;
                weapon.attackCount += 1;
                weapon.active = false;
                weapon.visible = false;
            }
        }
        return weapon
    }
}
