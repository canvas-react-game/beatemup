import { Color } from "../core/utils/color";
import { RectangleGeometry } from "../core/geometry/rectangle/rectangle";
import { Scene } from "../core/scene";
import { EventBus } from "../core/eventBus";

import { Player } from "./objects/player";
import { Enemy } from "./objects/enemy";

import { generateRandomLevel, getFirstGroundTileOnLevel, getLastGroundTileOnLevel, Level, TileTypes, TILE_TYPES } from "./world.helpers";
import { Object2D } from "../core/object";
import { Vector2D } from "../core/utils/vector";
import { LEVEL_SIZE, TILE_SIZE } from "./world.config";
import { Ground } from "./objects/ground";
import { Wall } from "./objects/wall";
import { Camera } from "../core/camera";

//import PlayerImage from "../../../assets/images/player.png";
import TileSetImage from "../../../assets/tileset.png";

export type Sprite = {
    // Изображение
    image: HTMLImageElement | undefined,
    // Положение на изображении
    sx: number, 
    sy: number, 
    sWidth: number, 
    sHeight: number,
}

export class WorldManager {
    tileSetImage: HTMLImageElement

    constructor() {
        const tileSetImage = new Image(512, 512);
        tileSetImage.src = TileSetImage;
        this.tileSetImage = tileSetImage
    }

    composeLevel(
        gameOverCallback: () => void,
        eventBus: EventBus,
    ): [Scene, Camera] {

        // Camera
        const camera = new Camera(LEVEL_SIZE * 1)
        // Задаем бэкграунд и создаем сцену
        const background = new Color(0, 0, 0);
        const scene = new Scene(background);
        // Генерируем рандомный уровень
        const level = generateRandomLevel();
        // Создаем стены и tiles из матрицы уровня
        const objects = this._createWallsAndTilesFromLevel(level);
        // И добавляем в сцену первыми
        scene.add(...objects)
        scene.addObjectWithPhysics(...objects.filter(x => x instanceof Wall))
        // Создаем Игрока
        const player = this._createPlayer(eventBus, level)
        // Добавляем в сцену
        scene.add(player);
        scene.addObjectWithPhysics(player);
        // Устанавливаем объект привязки камеры
        camera.bindObject(player)
        // Создаем противника
        const enemy = this._createEnemy(eventBus, level, gameOverCallback)
        // Добавляем в сцену
        scene.add(enemy);
        scene.addObjectWithPhysics(enemy);

        return [scene, camera];
    }

    private _createWallsAndTilesFromLevel(level: Level): Array<Object2D> {
        let objects: Array<Object2D> = []
        for(let i = 0; i < level.length; i++) {
            for(let j = 0; j < level.length; j++) {
                const number = level[i][j]
                const position: Vector2D = new Vector2D(j * TILE_SIZE, i * TILE_SIZE)
                if(TILE_TYPES[number] === TileTypes.Ground) {
                    const groundGeom = new RectangleGeometry(TILE_SIZE, TILE_SIZE)
                    const color = new Color(225,0,0)
                    const ground = new Ground({geometry: groundGeom, color})
                    ground.position = position
                    // TODO: Перенести в класс
                    const sprite: Sprite = {
                        image: this.tileSetImage,
                        sx: 16,
                        sy: 64,
                        sWidth: 16,
                        sHeight: 16
                    }
                    ground.sprite = sprite                    
                    objects.push(ground)
                }    
                if(TILE_TYPES[number] === TileTypes.Wall) {
                    const wallGeom = new RectangleGeometry(TILE_SIZE, TILE_SIZE)
                    const color = new Color(0,225,0)
                    const wall = new Wall({geometry: wallGeom, color})
                    wall.position = position
                    // TODO: Перенести в класс
                    const sprite: Sprite = {
                        image: this.tileSetImage,
                        sx: 16,
                        sy: 16,
                        sWidth: 16,
                        sHeight: 16
                    }
                    wall.sprite = sprite  
                    objects.push(wall)                   
                } 
            }
        }
        return objects
    }

    private _createPlayer(eventBus: EventBus, level: Level): Player {
        const playerGeom = new RectangleGeometry(16, 28);
        const player = new Player({
            geometry: playerGeom,
            eventBus,
            image: this.tileSetImage,
        });
        // Зададим дефолтное положение
        const playerPosition = getFirstGroundTileOnLevel(level);
        if(!playerPosition) {
            throw new Error("Уровень сгенерирован с ошибкой")
        }
        player.position = playerPosition
        // Загружаем изображение для спрайта игрока
        // const image = new Image(TILE_SIZE, TILE_SIZE);
        // image.src = PlayerImage;
        // Устанавливаем спрайт
        // const playerSprite: Sprite = {
        //     image,
        //     sx: 0,
        //     sy: 0,
        //     sWidth: TILE_SIZE,
        //     sHeight: TILE_SIZE
        // }
        // player.sprite = playerSprite;
        return player
    }

    private _createEnemy(
        eventBus: EventBus, 
        level: Level,
        gameOverCallback: () => void
    ): Enemy {
        const enemyGeom = new RectangleGeometry(TILE_SIZE, TILE_SIZE);
        const enemy = new Enemy({
            geometry: enemyGeom,
            color: new Color(0, 0, 255),
            gameOverCallback,
        });
        // Зададим дефолтное положение
        const enemyPosition = getLastGroundTileOnLevel(level);
        if(!enemyPosition) {
            throw new Error("Уровень сгенерирован с ошибкой")
        }
        enemy.position = enemyPosition
        // sprite
        // TODO: Перенести в класс
        const sprite: Sprite = {
            image: this.tileSetImage,
            sx: 368,
            sy: 80,
            sWidth: 16,
            sHeight: 16
        }
        enemy.sprite = sprite
        return enemy
    }
}