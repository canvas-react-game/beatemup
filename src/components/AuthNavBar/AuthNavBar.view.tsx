import React, { FC } from "react";

import NavBar from "../NavBar";
import styles from "./AuthNavBar.module.scss";

interface Props {
    currentPath: string;
}

// import { routes as appRoutes } from "@/config/routes/routes";

// const routes = [
//     { path: appRoutes.signIn.path, label: "Вход" },
//     { path: appRoutes.signUp.path, label: "Регистрация" },
// ];

const Nav: FC<Props> = ({ currentPath }) => (
    <div className={styles.nav}>
        <NavBar currentPath={currentPath} />
    </div>
);

export default Nav;
