import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

import { useMountEffect } from "@/hooks/useMountEffect";
import { routes as appRoutes } from "@/config/routes/routes";
import { useSelector } from "@/hooks/useSelector";

export interface Route {
    path: string;
    label: string;
}

interface Props {
    currentPath?: string;
}

const NavBar: FC<Props> = ({ currentPath }) => {
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    const isSignedInOAuth = useSelector((state) => state.auth.isSignedInOAuth);
    const [routes, setRoutes] = useState<Route[]>([]);

    const allRoutes = [
        { path: appRoutes.about.path, label: "Об игре" },
        { path: appRoutes.profile.path, label: "Профиль" },
        { path: appRoutes.leaderboard.path, label: "Таблица лидеров" },
        { path: appRoutes.forum.path, label: "Форум" },
    ];

    useMountEffect(() => {
        if (isSignedIn || isSignedInOAuth) {
            setRoutes(allRoutes);
        } else {
            setRoutes(
                allRoutes.filter((route) => route.path === appRoutes.about.path),
            );
        }
    });

    return (
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
                        <Link to={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
