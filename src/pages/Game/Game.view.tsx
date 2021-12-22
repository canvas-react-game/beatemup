import React, {FC, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";

import {World} from "@/game/world/world";
import {routes} from '@/config/routes/routes';

import Menu from './Menu';
import styles from './Game.module.scss';

const Game: FC = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [active, setActive] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const world = new World()
        world.init(canvasRef.current)

        return () => {
            world.destroy()
        }
    }, []);

    const onClose = () => {
        setActive(false);
        history.push(`/#${routes.main.path}`);
    };

    const onStart = () => setActive(false);

    return (
        <>
            <canvas className={styles.game} ref={canvasRef} />
            <Menu active={active} onClose={onClose} onStart={onStart} />
        </>
    )
};
  
export default Game