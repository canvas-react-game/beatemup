import { Vector2D } from "../core/utils/vector";
import { TILE_SIZE } from "./world.config";

// Матрица уровня 40х40
export type Level = Array<Array<number>>;

// Виды значений в матрице уровня
export enum TileTypes {
    Ground = "Ground",
    Wall = "Wall",
    UI = "UI",
}

type TileIndexed = {
    [key: number]: string
};

export const TILE_TYPES: TileIndexed = {
    1: TileTypes.Ground,
    2: TileTypes.Wall,
    3: TileTypes.UI,
};

export type Direction = {
    name: string
    chance: number
};

export type Directions = {
    left: Direction
    right: Direction
    down: Direction
    top: Direction
};

export const getRandomDirection = (directions: Directions): Direction => {
    let min = 0;
    const random = Math.random();
    if (random < directions.left.chance) {
        return directions.left;
    }
    min += directions.left.chance;
    if (random < min + directions.right.chance) {
        return directions.right;
    }
    min += directions.right.chance;
    if (random < min + directions.down.chance) {
        return directions.down;
    }
    min += directions.down.chance;
    if (random < min + directions.top.chance) {
        return directions.top;
    }
    return { name: "", chance: -1 };
};

const fillMatrix = (level: Level, i: number, j: number, window: number): Level => {
    const matrix = level;
    for (let k = i; k < i + window; k += 1) {
        for (let f = j; f < j + window; f += 1) {
            matrix[k][f] = 1;
        }
    }
    return matrix;
};

// TODO: Фикс багов генерации уровня
/**
    Генерирует рандомную матрицу уровня 40х40
*/
export const generateRandomLevel = (): Level => {
    // Размер доступной части level
    const minRight = 1;
    const maxRight = 38;
    const minDown = 1;
    const maxDown = 38;
    // Level по дефолту ui background
    let level: Level = new Array(maxRight + 2).fill(0).map((x) => new Array(maxDown + 2).fill(3));
    // Шанс перейти на след tile
    const directions: Directions = {
        left: { name: "left", chance: 0 },
        right: { name: "right", chance: 0.8 },
        down: { name: "down", chance: 0.2 },
        top: { name: "top", chance: 0 },
    };
    // Считаем сколько раз шагнули вниз, чтобы разрешить шагать вверх
    // let downCount = 0;
    // Окно генерации уровня
    const pathWindow = 6;
    // Указатели tile уровня
    let tileHorizontal = Math.round(Math.random() * (maxRight - minRight) + minRight);
    let tileVertical = minDown;
    // Случайно генерируем путь уровня, выставляя 1 где можно ходить
    while (tileVertical + pathWindow < maxDown) {
        // Выбираем направление
        let directon = getRandomDirection(directions);
        // Шагаем в зависимости от направления
        if (directon === directions.right) {
            // Если справа есть куда шагать
            if (tileHorizontal + 2 * pathWindow < maxRight) {
                // Делаем шаг вправо
                tileHorizontal += pathWindow;
                // Обновляем уровень
                level = fillMatrix(level, tileVertical, tileHorizontal, pathWindow);
                // Следующий шаг со след рандомными значениями
                directions.left.chance = 0.45;
                directions.right.chance = 0.45;
                directions.down.chance = 0.1;
                directions.top.chance = 0;
            } else { // Иначе шагаем вниз
                directon = directions.down;
                // След шаг только влево или вниз, тк вправо больше некуда шагать
                directions.left.chance = 0.9;
                directions.right.chance = 0;
                directions.down.chance = 0.1;
                directions.top.chance = 0;
            }
        }
        if (directon === directions.down) {
            if (tileVertical + 2 * pathWindow < maxDown) {
                // Делаем шаг вниз
                tileVertical += pathWindow;
                // Шагаем вниз и даем возможность шагать влево
                level = fillMatrix(level, tileVertical, tileHorizontal, pathWindow);
                // Влево или вправо рандомно
                directions.left.chance = 0.45;
                directions.right.chance = 0.45;
                //
                // downCount++
                // if(downCount === 3) {
                //     directions.top.chance = 0.05
                //     directions.down.chance = 0.05
                //     downCount = 0
                // }
                // else {
                //     directions.top.chance = 0
                //     directions.down.chance = 0.1
                // }
            } else {
                // Заканчиваем генерацию
                tileVertical += pathWindow;
            }
        }
        if (directon === directions.left) {
            if (tileHorizontal - pathWindow > minRight) {
                // Шаг влево
                tileHorizontal -= pathWindow;
                level = fillMatrix(level, tileVertical, tileHorizontal, pathWindow);
                // Для след шага
                directions.left.chance = 0.45;
                directions.right.chance = 0.45;
                directions.down.chance = 0.1;
                directions.top.chance = 0;
            } else {
                // Иначе шагаем вниз
                directon = directions.down;
                // Влево больше некуда шагать
                directions.right.chance = 0.9;
                directions.left.chance = 0;
                directions.down.chance = 0.1;
                directions.top.chance = 0;
            }
        }
        // if(directon === directions.top) {

        // }
    }
    // Проставляем стены
    for (let i = 0; i < level.length; i += 1) {
        for (let j = 0; j < level.length; j += 1) {
            // Ставим стены рядом с землей
            if (level[i][j] === 1) {
                if (level[i + 1][j] === 3) {
                    level[i + 1][j] = 2;
                }
                if (level[i - 1][j] === 3) {
                    level[i - 1][j] = 2;
                }
                if (level[i + 1][j - 1] === 3) {
                    level[i + 1][j - 1] = 2;
                }
                if (level[i + 1][j + 1] === 3) {
                    level[i + 1][j + 1] = 2;
                }
                if (level[i][j - 1] === 3) {
                    level[i][j - 1] = 2;
                    level[i - 1][j - 1] = 2;
                }
                if (level[i][j + 1] === 3) {
                    level[i][j + 1] = 2;
                    level[i - 1][j + 1] = 2;
                }
            }
        }
    }
    return level;
};

/**
    Найти первый доступный для размещения кусок земли с начала
*/
export const getFirstGroundTileOnLevel = (level: Level): Vector2D | undefined => {
    for (let i = 0; i < level.length; i += 1) {
        for (let j = 0; j < level.length; j += 1) {
            const number = level[i][j];
            if (TILE_TYPES[number] === TileTypes.Ground) {
                return new Vector2D(j * TILE_SIZE, i * TILE_SIZE);
            }
        }
    }
    return undefined;
};

/**
    Найти первый доступный для размещения кусок земли с конца
*/
export const getLastGroundTileOnLevel = (level: Level): Vector2D | undefined => {
    for (let i = level.length - 1; i >= 0; i -= 1) {
        for (let j = level.length - 1; j >= 0; j -= 1) {
            const number = level[i][j];
            if (TILE_TYPES[number] === TileTypes.Ground) {
                return new Vector2D(j * TILE_SIZE, i * TILE_SIZE);
            }
        }
    }
    return undefined;
};
