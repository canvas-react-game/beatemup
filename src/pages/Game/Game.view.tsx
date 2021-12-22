import React, {FC, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";

import {World} from "@/game/world/world";
import {routes} from '@/config/routes/routes';

import Menu from './Menu';
import styles from './Game.module.scss';

const Game: FC = () => {
    const [active, setActive] = useState(true);
    const [pause, setPause] = useState(false);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const history = useHistory();

    const world = new World();

    const callMenu = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setActive(true);
            setPause(true);
            world.setPause(true);
        }
    }

    useEffect(() => {
        world.init(canvasRef.current);
        document.addEventListener('keydown', callMenu);

        return () => {
            world.destroy()
            // TODO removeListener
        }
    }, []);

    const onClose = () => {
        setActive(false);
        history.push(`/#${routes.main.path}`);
    };

    const onStart = () => {
        setPause(false);
        setActive(false);
    }

    const onResume = () => {
        setPause(false);
        setActive(false);
        world.setPause(false)
    }

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