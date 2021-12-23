import React, {FC, useEffect} from "react";

import {useGame} from "@/pages/Game/Game.helpers";

import Menu from './Menu';
import styles from './Game.module.scss';

const Game: FC = () => {
   const { active, pause, canvasRef, onStart, onResume, onClose, setUpPauseButton } = useGame();

    useEffect(() => {
        setUpPauseButton();
    }, []);

    return (
        <>
            <canvas className={styles.game} ref={canvasRef} />
            <Menu
                active={active}
                onClose={onClose}
                onStart={onStart}
                isPause={pause}
                onResume={onResume}
            />
        </>
    )
};
  
export default Game