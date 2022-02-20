import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { World } from "@/game/world/world";
import { routes } from "@/config/routes/routes";

const togglePointerLock = () => {
    document.documentElement.requestPointerLock();
}

const togglePointerUnlock = () => {
    document.exitPointerLock();
}

const exitFullScreen = () => {
    if(document.fullscreenElement) {
        document.exitFullscreen();
    }
}

const openFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}

const toggleFullScreen = () => {
    if(document.fullscreenElement) {
        exitFullScreen()
    } else {
        openFullScreen()
    }
};

export const useGame = () => {
    const [isActive, setActive] = useState(true);
    const [isGameOver, setGameOver] = useState(false);
    const [isGameWin, setGameWin] = useState(false);
    const [isPaused, setPause] = useState(false);
    const [world] = useState(new World());
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const uiCanvasRef = React.useRef<HTMLCanvasElement>(null);
    const history = useHistory();

    const callMenu = useCallback((e: KeyboardEvent) => {
        if (e.key === "q") {
            setActive(true);
            setPause(true);
            world.stopAnimation();
            togglePointerUnlock();
        }
        if (e.key === "f") {
            toggleFullScreen();
        }
    }, []);

    const callGameOver = useCallback(() => {
        setActive(true);
        setGameOver(true);
        world.destroy();
        togglePointerUnlock();
    }, []);

    const callGameWin = useCallback(() => {
        setActive(true);
        setGameWin(true);
        world.destroy();
        togglePointerUnlock();
    }, []);

    const setUpPauseButton = useCallback(() => {
        document.addEventListener("keydown", callMenu);
    }, []);

    const onClose = useCallback(() => {
        setActive(false);
        exitFullScreen();
        history.push(routes.main.path);
    }, []);

    const onStart = useCallback(() => {
        world.init({
            canvas: canvasRef.current,
            uiCanvas: uiCanvasRef.current,
            gameOverCallback: callGameOver,
            gameWinCallback: callGameWin,
        });
        setGameOver(false);
        setGameWin(false);
        setPause(false);
        setActive(false);
        togglePointerLock();
    }, []);

    const onResume = useCallback(() => {
        world.startAnimataion();
        setPause(false);
        setActive(false);
        togglePointerLock();
    }, []);

    const onUnmount = useCallback(() => {
        world.destroy();
        document.removeEventListener("keydown", callMenu);
    }, []);

    return {
        isActive,
        isPaused,
        canvasRef,
        uiCanvasRef,
        onStart,
        onResume,
        onClose,
        onUnmount,
        setUpPauseButton,
        isGameOver,
        isGameWin,
    };
};
