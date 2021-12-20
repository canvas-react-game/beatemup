import { Object2D, Object2DProps } from "../../../game/core/object";
import { EventBus, EventTypes } from "../../core/eventBus";
import { Collidable } from "../../core/physics/physics"
import { Box2 } from "../../core/utils/box2";

type PlayerProps = Object2DProps & {
    eventBus: EventBus
}

type MoveState = {
    isMovingLeft: boolean
    isMovingRight: boolean
    isMovingTop: boolean
    isMovingDown: boolean
}

export class Player extends Object2D implements Collidable {

    // Скорость передвижения пиксель/сек
    speed: number = 300
    // Global event bus
    eventBus: EventBus
    // Флаги состояния передвижения
    moveState: MoveState
    //
    canCollide: boolean = true

    constructor(props: PlayerProps) {
        super(props)
        
        this.eventBus = props.eventBus
        this.moveState = {
            isMovingLeft: false,
            isMovingRight: false,
            isMovingTop: false,
            isMovingDown: false     
        }

        this.init()
    }

    init() {

        this.eventBus.on(
            EventTypes.arrowLeftDown, 
            () => this.moveState.isMovingLeft = true
        )
        this.eventBus.on(
            EventTypes.arrowBottomDown, 
            () => this.moveState.isMovingDown = true
        )
        this.eventBus.on(
            EventTypes.arrowTopDown, 
            () => this.moveState.isMovingTop = true
        )
        this.eventBus.on(
            EventTypes.arrowRightDown, 
            () => this.moveState.isMovingRight = true
        )
        this.eventBus.on(
            EventTypes.arrowLeftUp, 
            () => this.moveState.isMovingLeft = false
        )
        this.eventBus.on(
            EventTypes.arrowTopUp, 
            () => this.moveState.isMovingTop = false
        )
        this.eventBus.on(
            EventTypes.arrowBottomUp,
            () => this.moveState.isMovingDown = false 
        )
        this.eventBus.on(
            EventTypes.arrowRightUp, 
            () => this.moveState.isMovingRight = false
        )        
    }

    updateState(dt: number) {

        const delta = (dt / 1000) * this.speed

        if(this.moveState.isMovingDown) {
            this.positon.y += delta
        }
        if(this.moveState.isMovingTop) {
            this.positon.y -= delta
        }
        if(this.moveState.isMovingRight) {
            this.positon.x += delta
        }
        if(this.moveState.isMovingLeft) {
            this.positon.x -= delta
        }
    }

    isMoving(): boolean {
        return Object.values(this.moveState).reduce((res, val) => res || val, false)
    }

    // NOTE: Если скорость объекта значительно больше размера препятствия, то
    // может случиться "проскок" объекта
    // TODO: Переписать логику столкновения
    // потому что это работает, но с багами при соприкосновении с углами стен
    onCollide(obstacle: Object2D & Collidable) {
        // Края объекта не должны пересекаться с bounding box obstacle
        const objGeomBB = this.geometry.boundingBox as Box2
        const obstGeomBB = obstacle.geometry.boundingBox as Box2
        const {isMovingRight, isMovingLeft, isMovingDown, isMovingTop} = this.moveState
        if(this.isMoving()) {
            if(
                isMovingRight && 
                objGeomBB.max.x > obstacle.positon.x &&
                this.positon.x < obstacle.positon.x
            ) {
                this.positon.x -= objGeomBB.max.x - obstacle.positon.x
            }
            if(
                isMovingLeft && 
                this.positon.x < obstGeomBB.max.x && 
                objGeomBB.max.x > obstGeomBB.max.x
            ) {
                this.positon.x += obstGeomBB.max.x - this.positon.x
            }  
            if(
                isMovingDown && 
                objGeomBB.max.y > obstacle.positon.y && 
                this.positon.y < obstacle.positon.y
            ) {
                this.positon.y -= objGeomBB.max.y - obstacle.positon.y
            }
            if(
                isMovingTop && 
                this.positon.y < obstGeomBB.max.y && 
                objGeomBB.max.y > obstGeomBB.max.y
            ) {
                this.positon.y += obstGeomBB.max.y - this.positon.y
            }          
        }
    }

}