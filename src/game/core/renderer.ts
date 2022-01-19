import { Camera } from "./camera";
import { GeometryTypes } from "./geometry/geometry";
import { RectangleGeometry } from "./geometry/rectangle/rectangle";
import { Object2D } from "./object";
import Physics, { isImplementingCollision } from "./physics/physics";
import { Scene } from "./scene";

type RendererProps = {
    canvas: HTMLCanvasElement | null
    width: number
    height: number
};

export class Renderer {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(props: RendererProps) {
        if (!props.canvas) {
            throw new Error("Ошибка инициализации");
        }
        const context = props.canvas.getContext("2d");
        if (!context) {
            throw new Error("Ошибка получения контекста канвас");
        }

        this.canvas = props.canvas;
        this.context = context;

        this.init(props.width, props.height);
    }

    init(width: number, height: number) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    // Нарисовать все объекты сцены на канвасе. Обрезать камерой лишнее
    render(scene: Scene, camera: Camera) {
        const c = this.context;
        const { canvas } = this;
        const { background } = scene;
        // TODO: Обрезать объекты в сцене камерой

        // Сначала очищаем канвас и рисуем контур
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.strokeStyle = "rgb(255, 255, 255)";
        c.lineWidth = 1;
        c.strokeRect(0, 0, canvas.width, canvas.height);
        // Затем рисуем бэкграунд
        c.fillStyle = `rgba(${background.r}, ${background.g}, ${background.b}, ${background.a})`;
        c.fillRect(0, 0, canvas.width, canvas.height);
        // Отрисовка в цикле всех объектов в сцене
        for (const obj of scene.objects) {
            switch (obj.geometry.type) {
                case GeometryTypes.Rectangle:
                    this._drawRectangle(obj, camera);
                    break;
                default:
                    break;
            }
        }
    }

    // Запустить физику и пересчитать анимацию
    prerender(scene: Scene) {
        // Сначала пересчитываем анимацию
        for (const obj of scene.objectWithPhysics) {
            obj.updateState();
        }
        // TODO: Реализовать Quadtree collison detection
        /* eslint-disable */
        // https://gamedevelopment.tutsplus.com/tutorials/quick-tip-use-quadtrees-to-detect-likely-collisions-in-2d-space--gamedev-374
        // https://stackoverflow.com/questions/4981866/quadtree-for-2d-collision-detection
        /* eslint-enable */

        // Затем проверяем столкновение объектов в сцене
        for (let i = 0; i < scene.objectWithPhysics.length; i += 1) {
            for (let j = i + 1; j < scene.objectWithPhysics.length; j += 1) {
                const obj1 = scene.objectWithPhysics[i];
                const obj2 = scene.objectWithPhysics[j];

                if (
                    isImplementingCollision(obj1)
                    && isImplementingCollision(obj2)
                ) {
                    const collided = Physics.hasBox2DCollided(obj1, obj2);
                    // TODO: Определить очередность вызова callback
                    // Например, если в движущегося игрока попадает пуля, то игрок не должен
                    // от этого переместиться, а пуля должна уничтожиться
                    if (collided) {
                        obj1.onCollide(obj2);
                        obj2.onCollide(obj1);
                    }
                }
            }
        }
    }

    // Resize
    resize(height: number, width: number) {
        this.canvas.height = height;
        this.canvas.width = width;
    }

    // Отрисовка rectangle на канвасе
    private _drawRectangle(object: Object2D, camera: Camera) {
        const c = this.context;
        const geom = object.geometry as RectangleGeometry;
        const { color } = object;
        let { x, y } = object.position;
        let { width, height } = geom;
        // Смещаем координаты отностительно объекта привязки камеры
        x = camera.size / 2 + (x - camera.bindedObject.position.x);
        y = camera.size / 2 + (y - camera.bindedObject.position.y);
        // Переводим world coordinates в координаты отрисовки
        // TODO: Проблема округления координат
        const K = this.canvas.width / camera.size;
        x *= K;
        // Рассчитываем с поправкой на позиционирование камеры
        y = K * y - ((camera.size / 2) * K - this.canvas.height / 2);
        width *= K;
        height *= K;
        if (object.spriteConfig?.image) {
            const sp = object.spriteConfig.sprite;
            const image = object.spriteConfig.image as HTMLImageElement;
            // flip the sprite
            if(object.spriteConfig.shouldFlip) {
                // move to x + img's width
                // adding img.width is necessary because we're flipping from
                //     the right side of the img so after flipping it's still
                //     at [x,y]
                c.translate(x+width,y);
                // scaleX by -1; this "trick" flips horizontally
                c.scale(-1,1);
                // draw the img
                // no need for x,y since we've already translated
                c.drawImage(image, sp.sx, sp.sy, sp.sWidth, sp.sHeight, 0, 0, width, height);
                // always clean up -- reset transformations to default
                c.setTransform(1,0,0,1,0,0);
            } else {
                c.drawImage(image, sp.sx, sp.sy, sp.sWidth, sp.sHeight, x, y, width, height);
            }
        } else {
            c.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
            c.fillRect(x, y, width, height);
        }
    }
}
