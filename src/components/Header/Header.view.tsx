import React, { FC } from "react"

import { routes as appRoutes } from "@/config/routes/routes"

import styles from "./Header.module.scss"
import NavBar from "../NavBar"

interface Props {
    currentPath?: string;
}

// todo поправить при переходе на browserouter
const routes = [
    { path: `/#${appRoutes.about.path}`, label: "Об игре" },
    { path: `/#${appRoutes.profile.path}`, label: "Профиль" },
    { path: `/#${appRoutes.leaderboard.path}`, label: "Таблица лидеров" },
    { path: `/#${appRoutes.forum.path}`, label: "Форум" },
]

const mainRoute = `/#${appRoutes.main.path}`
const signInRoute = `/#${appRoutes.signIn.path}`
const signUpRoute = `/#${appRoutes.signUp.path}`

const Header: FC<Props> = ({ currentPath }) => (
    <div className={styles.container}>
        <div className={styles.logo}>
            <a href={mainRoute}>Logo</a>
        </div>
        <div className={styles.routesContainer}>
            <NavBar currentPath={currentPath} routes={routes} />
            <div className={styles.buttonContainer}>
                <a className={styles.signIn} href={signInRoute}>Вход</a>
                <a className={styles.signUp} href={signUpRoute}>Регистрация</a>
            </div>
        </div>
    </div>
)

export default Header