import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { shallowEqual } from "react-redux";

import { World } from "@/game/world/world";
import { routes } from "@/config/routes/routes";
import { TEAM_SCORE, LeaderBoardRecord } from "@/config/leaderboard";
import { useSelector } from "@/hooks/useSelector";
import LeaderboardApi from "@/api/Leaderboard/Leaderboard.api";

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
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
    const user = useSelector((state) => state.profile.data, shallowEqual);

    const createRecord = useCallback(() => {
        const data: LeaderBoardRecord = {
            login: user.login,
            [TEAM_SCORE]: Math.round(Math.random() * 200),
        };
        LeaderboardApi.createLeaderBoardRecord(data);
    }, []);

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
        createRecord();
    }, []);

    const callGameWin = useCallback(() => {
        setActive(true);
        setGameWin(true);
        world.destroy();
        createRecord();
    }, []);

    const setUpPauseButton = useCallback(() => {
        document.addEventListener("keydown", callMenu);
    }, []);

    const onClose = useCallback(() => {
        setActive(false);
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
    }, []);

    const onResume = useCallback(() => {
        world.startAnimataion();
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
