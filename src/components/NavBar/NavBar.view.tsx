import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

export interface Route {
    path: string;
    label: string;
}

interface Props {
    currentPath?: string;
    routes: Route[];
}

export const NavBar: FC<Props> = ({ currentPath, routes }) => (
    <nav className={styles.ulContainer}>
        <ul className={styles.ul}>
            {routes.map((route) => <li
                className={
                    route.path === currentPath
                        ? styles.active
                        : styles.inactive
                }
                key={route.path}
            >
                <Link to={route.path}>{route.label}</Link>
            </li>)
            }
        </ul>
    </nav>
);