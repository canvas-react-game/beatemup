import React, { FC, useEffect } from "react";

import {World} from "@/game/world/world";

import Menu from './Menu';
import styles from './Game.module.scss';

const Game: FC = () => {

    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const world = new World()
        world.init(canvasRef.current)

        return () => {
            world.destroy()
        }
    }, [])

    return (
        <>
            <canvas className={styles.game} ref={canvasRef} />
            <Menu />
        </>
    )
};
  
export default Game