import React, {FC} from 'react';

import {routes} from '@/config/routes/routes';

import NavBar from "../NavBar";
import styles from './Nav.module.scss';

interface Props {
    currentRoute: string;
}

const links = [
    { route: `/#${routes.signIn.path}`, label: 'Вход'},
    { route: `/#${routes.signUp.path}`, label: 'Регистрация'},
]

const Nav: FC<Props> = ({ currentRoute}) => {
    return (
        <div className={styles.nav}>
            <NavBar currentRoute={currentRoute} links={links} />
        </div>
    );
};

export default Nav;