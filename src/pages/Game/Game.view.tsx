import React, { FC } from "react";

import { useGame } from "@/pages/Game/Game.helpers";

import Menu from "./Menu";
import styles from "./Game.module.scss";
import { useMountEffect } from "@/hooks/useMountEffect";
import { useUnmountEffect } from "@/hooks/useUnmountEffect";

const Game: FC = () => {
    const {
        isActive,
        isPaused,
        canvasRef,
        onStart,
        onResume,
        onClose,
        onUnmount,
        setUpPauseButton,
        isGameOver,
        isGameWin
    } = useGame();

    useMountEffect(() => {
        setUpPauseButton();
    });

    useUnmountEffect(() => {
        onUnmount();
    });

    return (
        <div className={styles.game}>
            <canvas ref={canvasRef} />
            <Menu
                isActive={isActive}
                onClose={onClose}
                onStart={onStart}
                isPaused={isPaused}
                isGameOver={isGameOver}
                isGameWin={isGameWin}
                onResume={onResume}
            />
        </div>
    );
};

export default Game;
