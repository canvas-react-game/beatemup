import React, { FC } from "react";

import { routes as appRoutes } from "@/config/routes/routes";

import styles from "./Header.module.scss";
import NavBar from "../NavBar";

interface Props {
    currentPath?: string;
}

// todo поправить при переходе на browserouter
const routes = [
    { path: `/#${appRoutes.about.path}`, label: "Об игре" },
    { path: `/#${appRoutes.profile.path}`, label: "Профиль" },
    { path: `/#${appRoutes.leaderboard.path}`, label: "Таблица лидеров" },
    { path: `/#${appRoutes.forum.path}`, label: "Форум" },
];

const mainRoute = `/#${appRoutes.main.path}`;

const Header: FC<Props> = ({ currentPath }) => (
    <header className={styles.container}>
        <div className={styles.logo}>
            <a href={mainRoute}>Logo</a>
        </div>
        <div className={styles.routesContainer}>
            <NavBar currentPath={currentPath} routes={routes} />
        </div>
    </header>
);

export default Header;
