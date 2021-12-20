import React, {FC} from 'react';

import {routes} from "@/config/routes/routes";

import styles from './Header.module.scss';
import NavBar from "../NavBar";

interface Props {
    currentRoute?: string;
}

// todo поправить при переходе на browserouter
const links = [
    { route: `/#${routes.about.path}`, label: 'Об игре'},
    { route: `/#${routes.profile.path}`, label: 'Профиль'},
    { route: `/#${routes.leaderboard.path}`, label: 'Таблица лидеров'},
    { route: `/#${routes.forum.path}`, label: 'Форум'},
]

const mainRoute = `/#${routes.main.path}`;
const signInRoute = `/#${routes.signIn.path}`;
const signUpRoute = `/#${routes.signUp.path}`;

const Header: FC<Props> = ({ currentRoute }) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <a href={mainRoute}>Logo</a>
            </div>
            <div className={styles.routesContainer}>
                <NavBar currentRoute={currentRoute} links={links} />
                <div className={styles.buttonContainer}>
                    <a className={styles.signIn} href={signInRoute}>Вход</a>
                    <a className={styles.signUp} href={signUpRoute}>Регистрация</a>
                </div>
            </div>
        </div>
    );
};

export default Header;