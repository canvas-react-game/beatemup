export const LEVEL_SIZE = 640; // in px
export const TILE_SIZE = 16; // in px

export const STEP = 1 / 60; // in sec

// Список всех событий в игре
export enum EventTypes {
    // Передвижение
    ArrowLeftDown = "ArrowLeftDown",
    ArrowTopDown = "ArrowTopDown",
    ArrowBottomDown = "ArrowBottomDown",
    ArrowRightDown = "ArrowRightDown",
    ArrowLeftUp = "ArrowLeftUp",
    ArrowTopUp = "ArrowTopUp",
    ArrowBottomUp = "ArrowBottomUp",
    ArrowRightUp = "ArrowRightUp",
    // Удар
    SpaceDown = "SpaceDown",
    SpaceUp = "SpaceUp",
    // Resize
    Resize = "Resize",
}

export enum KeyboardEvents {
    // Move
    ArrowLeft = "ArrowLeft",
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowRight = "ArrowRight",
    // Attack
    Space = " ",
}

export const TOGGLE_MENU_BUTTON = "q";
export const TOGGLE_FULLSCREEN_BUTTON = "f";
