import React, {FC, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";

import {World} from "@/game/world/world";
import {routes} from '@/config/routes/routes';

import Menu from './Menu';
import styles from './Game.module.scss';

const Game: FC = () => {
    const [active, setActive] = useState(true);
    const [pause, setPause] = useState(false);
    const [world] = useState(new World());
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const history = useHistory();

    const callMenu = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setActive(true);
            setPause(true);
            world.setPause(true);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', callMenu);
    }, []);

    const onClose = () => {
        setActive(false);
        world.destroy()
        history.push(`/#${routes.main.path}`);
    };

    const onStart = () => {
        world.init(canvasRef.current);
        setPause(false);
        setActive(false);
    }

    const onResume = () => {
        world.setPause(false);
        setPause(false);
        setActive(false);
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