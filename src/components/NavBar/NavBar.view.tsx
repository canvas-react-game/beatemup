import React, { FC } from "react";

import styles from "./NavBar.module.scss";

export interface Route {
    path: string;
    label: string;
}

interface Props {
    currentPath?: string;
    routes: Route[];
}

const NavBar: FC<Props> = ({ currentPath, routes }) => (
    <nav className={styles.ulContainer}>
        <ul className={styles.ul}>
            {routes.map((route) => (
                <li
                    className={
                        route.path === currentPath
                            ? styles.active
                            : styles.inactive
                    }
                    key={route.path}
                >
                    <a href={route.path}>{route.label}</a>
                </li>
            ))}
        </ul>
    </nav>
);

export default NavBar;
