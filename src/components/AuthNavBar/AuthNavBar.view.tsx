import React, { FC } from "react";

import { routes as appRoutes } from "@/config/routes/routes";

import NavBar from "../NavBar";
import styles from "./AuthNavBar.module.scss";

interface Props {
    currentPath: string;
}

const routes = [
    { path: appRoutes.signIn.path, label: "Вход" },
    { path: appRoutes.signUp.path, label: "Регистрация" },
];

const Nav: FC<Props> = ({ currentPath }) => (
    <div className={styles.nav}>
        <NavBar currentPath={currentPath} routes={routes} />
    </div>
);

export default Nav;
