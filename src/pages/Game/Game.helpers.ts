import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { World } from "@/game/world/world";
import { routes } from "@/config/routes/routes";

export const useGame = () => {
    const [isActive, setActive] = useState(true);
    const [isPaused, setPause] = useState(false);
    const [world] = useState(new World());
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const history = useHistory();

    const callMenu = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setActive(true);
            setPause(true);
            world.setPause(true);
        }
    }, []);

    const setUpPauseButton = useCallback(() => {
        document.addEventListener("keydown", callMenu);
    }, []);

    const onClose = useCallback(() => {
        setActive(false);
        history.push(routes.main.path);
    }, []);

    const onStart = useCallback(() => {
        world.init(canvasRef.current);
        setPause(false);
        setActive(false);
    }, []);

    const onResume = useCallback(() => {
        world.setPause(false);
        setPause(false);
        setActive(false);
    }, []);

    const onUnmount = useCallback(() => {
        world.destroy();
        document.removeEventListener("keydown", callMenu);
    }, []);

    return {
        isActive,
        isPaused,
        canvasRef,
        onStart,
        onResume,
        onClose,
        onUnmount,
        setUpPauseButton,
    };
};
