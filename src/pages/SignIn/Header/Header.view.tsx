import React, {FC} from 'react';
import styles from './Header.module.scss';
import {routes} from "../../../config/routes/routes";
import NavBar from "../../../components/NavBar";

// todo
const links = [
    { route: '', label: 'Об игре'},
    { route: '', label: 'Профиль'},
    { route: '', label: 'Таблица лидеров'},
    { route: '', label: 'Форум'},
]

const Header: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <a href={`/#${routes.signIn.path}`}>Logo</a>
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