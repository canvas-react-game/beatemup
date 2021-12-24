import React, {FC} from "react";

import {useGame} from "@/pages/Game/Game.helpers";

import Menu from './Menu';
import styles from './Game.module.scss';
import { useMountEffect } from "@/hooks/useMountEffect";
import { useUnmountEffect } from "@/hooks/useUnmountEffect";

const Game: FC = () => {
   const {
       isActive, isPaused, canvasRef, 
       onStart, onResume, onClose, 
       onUnmount, setUpPauseButton 
    } = useGame();

    useMountEffect(() => {
        setUpPauseButton()
    })

    useUnmountEffect(() => {
        onUnmount()
    })

    return (
        <>
            <canvas className={styles.game} ref={canvasRef} />
            <Menu
                isActive={isActive}
                onClose={onClose}
                onStart={onStart}
                isPaused={isPaused}
                onResume={onResume}
            />
        </>
    )
};
  
export default Game