import React, { useState, useCallback, SetStateAction, Dispatch } from "react";
import { useHistory } from "react-router-dom";

import { World } from "@/game/world/world";
import { routes } from "@/config/routes/routes";

const toggleFullScreen = () => {
    if(typeof document !== "undefined") {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
}

export const useGame = () => {
    const [isActive, setActive] = useState(true);
    const [isGameOver, setGameOver] = useState(false);
    const [isGameWin, setGameWin] = useState(false);
    const [isPaused, setPause] = useState(false);
    const [world] = useState(typeof window !== "undefined" && new World()) as [World, Dispatch<SetStateAction<World>>]
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const uiCanvasRef = React.useRef<HTMLCanvasElement>(null);
    const history = useHistory();

    const callMenu = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setActive(true);
            setPause(true);
            world.stopAnimation();
        }
        if (e.key === "f") {
            toggleFullScreen();
        }
    }, []);

    const callGameOver = useCallback(() => {
        setActive(true);
        setGameOver(true);
        world.destroy();
    }, []);

    const callGameWin = useCallback(() => {
        setActive(true);
        setGameWin(true);
        world.destroy();
    }, []);

    const setUpPauseButton = useCallback(() => {
        if(typeof document !== "undefined") {
            document.addEventListener("keydown", callMenu);
        }
    }, []);

    const onClose = useCallback(() => {
        setActive(false);
        history.push(routes.main.path);
    }, []);

    const onStart = useCallback(() => {
        if(typeof window !== "undefined") {
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
        }
    }, []);

    const onResume = useCallback(() => {
        world.startAnimataion();
        setPause(false);
        setActive(false);
    }, []);

    const onUnmount = useCallback(() => {
        world.destroy();
        if(typeof document !== "undefined") {
            document.removeEventListener("keydown", callMenu);
        }
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
