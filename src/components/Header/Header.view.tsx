import React, {FC} from 'react';

import {routes} from "@/config/routes/routes";

import styles from './Header.module.scss';
import NavBar from "../NavBar";

// todo
const links = [
    { route: '1', label: 'Об игре'},
    { route: '2', label: 'Профиль'},
    { route: '3', label: 'Таблица лидеров'},
    { route: '4', label: 'Форум'},
]

const Header: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <a href={`/#${routes.main.path}`}>Logo</a>
            </div>
            <div className={styles.routesContainer}>
                <NavBar links={links} />
                <div className={styles.buttonContainer}>
                    <a className={styles.signIn} href={`/#${routes.signIn.path}`}>Вход</a>
                    <a className={styles.signUp} href={`/#${routes.signUp.path}`}>Регистрация</a>
                </div>
            </div>
        </div>
    );
};

export default Header;