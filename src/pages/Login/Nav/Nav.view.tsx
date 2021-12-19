import React, {FC} from 'react';
import {routes} from '../../../config/routes/routes';
import NavBar from "../../../components/NavBar";
import styles from './Nav.module.scss';

const links = [
    { route: `/#${routes.signIn.path}`, label: 'Вход'},
    { route: `/#${routes.signUp.path}`, label: 'Регистрация'},
]

const Nav: FC = () => {
    return (
        <div className={styles.nav}>
            <NavBar currentRoute={`/#${routes.signIn.path}`} links={links} />
        </div>
    );
};

export default Nav;