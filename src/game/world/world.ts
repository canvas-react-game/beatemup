import { Camera } from "../core/camera"
import { RectangleGeometry } from "../core/geometry/rectangle/rectangle"
import {Renderer} from "../core/renderer"
import { Scene } from "../core/scene"
import { EventBus, EventTypes, KeyboardEvents } from "../core/eventBus"
import { Color } from "../core/utils/color"
import { Player } from "./objects/player"
import { Enemy } from "./objects/enemy"
import { Wall } from "./objects/wall"

// Игровой мир
export class World {

    canvas: HTMLCanvasElement | null = null
    renderer: Renderer | null = null
    scene: Scene | null = null
    camera: Camera | null = null

    eventBus: EventBus | null = null

    constructor() {

    }

    init(canvas: HTMLCanvasElement | null) {
        this.canvas = canvas
        this.eventBus = new EventBus()
        
        // Создаем Renderer
        this.renderer = new Renderer({
            canvas: canvas,
            width: window.innerWidth,
            height: window.innerHeight
        })

        // Задаем бэкграунд и создаем сценц
        const background = new Color(0, 0, 255)
        this.scene = new Scene(background)
        // Создаем камеру (пока что пустую)
        // const camera = new Camera()

        // Создаем Игрока
        const playerGeom = new RectangleGeometry(36, 36)
        const player = new Player({
            geometry: playerGeom,
            eventBus: this.eventBus
        })
        // Зададим дефолтное положение        
        player.positon.x = window.innerWidth / 2
        player.positon.y = window.innerHeight / 2
        // Загружаем изображение для спрайта игрока
        const image = new Image(36, 36)
        image.src = "player.png"
        // Устанавливаем спрайт
        player.sprite = image

        // Создаем противника
        const enemyGeom = new RectangleGeometry(36, 36)
        const enemy = new Enemy({
            geometry: enemyGeom,
            color: new Color(255, 0, 0)
        })
        // Зададим дефолтное положение        
        enemy.positon.x = window.innerWidth / 4
        enemy.positon.y = window.innerHeight / 4

        // Создаем стены
        const wall1Geom = new RectangleGeometry(30, 400)
        const wall1 = new Wall({
            geometry: wall1Geom,
            color: new Color(0, 255, 0)
        })
        wall1.positon.x = window.innerWidth / 2 - 200
        wall1.positon.y = window.innerHeight / 4

        const wall2Geom = new RectangleGeometry(30, 400)
        const wall2 = new Wall({
            geometry: wall2Geom,
            color: new Color(0, 255, 0)
        })
        wall2.positon.x = window.innerWidth / 2 + 200
        wall2.positon.y = window.innerHeight / 4

        const wall3Geom = new RectangleGeometry(400, 30)
        const wall3 = new Wall({
            geometry: wall3Geom,
            color: new Color(0, 255, 0)
        })
        wall3.positon.x = window.innerWidth / 2 - 175
        wall3.positon.y = window.innerHeight / 2 - 290

        // NOTE: Порядок подключения влияет на очередь отрисовки
        this.scene.add(wall1)
        this.scene.add(wall2)
        this.scene.add(wall3)
        this.scene.add(player)
        this.scene.add(enemy)

        this.registerEvents()
        this.animate()
    }

    animate() {
        const renderer = this.renderer as Renderer
        const scene = this.scene as Scene
        const camera = this.camera as Camera

        let last = performance.now()
        const render = () => {
            let now = performance.now()
            let dt = now - last
            last = now
            renderer.prerender(scene, dt, now)
            // TODO: Реализовать класс camera
            // camera.update()
            renderer.render(scene, camera)
            requestAnimationFrame(() => render())
        }

        render()
    }

    registerEvents() {
        const eventBus = this.eventBus as EventBus

        window.addEventListener("keydown", (e: KeyboardEvent) => {
            switch(e.key) {
                case KeyboardEvents.ArrowDown:
                    eventBus.emit(EventTypes.arrowBottomDown)
                    break
                case KeyboardEvents.ArrowLeft:
                    eventBus.emit(EventTypes.arrowLeftDown)
                    break
                case KeyboardEvents.ArrowRight:
                    eventBus.emit(EventTypes.arrowRightDown)
                    break
                case KeyboardEvents.ArrowUp:
                    eventBus.emit(EventTypes.arrowTopDown)   
                default:
                    break                                                         
            }
        })
        window.addEventListener("keyup", (e: KeyboardEvent) => {
            switch(e.key) {
                case KeyboardEvents.ArrowDown:
                    eventBus.emit(EventTypes.arrowBottomUp)
                    break
                case KeyboardEvents.ArrowLeft:
                    eventBus.emit(EventTypes.arrowLeftUp)
                    break
                case KeyboardEvents.ArrowRight:
                    eventBus.emit(EventTypes.arrowRightUp)
                    break
                case KeyboardEvents.ArrowUp:
                    eventBus.emit(EventTypes.arrowTopUp)     
                default:
                    break                                                       
            }            
        })
    }

}