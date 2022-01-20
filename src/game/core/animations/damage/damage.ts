import { GameAnimation } from "../animation";

export interface CanReceiveDamage {
    health: number
    maxHealth: number
    onDeath: () => void
}

export class DamageAnimation extends GameAnimation {

}