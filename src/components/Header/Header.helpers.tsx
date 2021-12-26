import React from "react";
import {useHistory} from "react-router";

import {routes as appRoutes} from "@/config/routes/routes";
import {setAccess} from "@/helpers/acess";
import api from '@/api/Auth';

import styles from "./Header.module.scss";

export const useHeader = () => {
    const history = useHistory();
    const routes = [
        { path: appRoutes.about.path, label: 'Об игре'},
        { path: appRoutes.profile.path, label: 'Профиль'},
        { path: appRoutes.leaderboard.path, label: 'Таблица лидеров'},
        { path: appRoutes.forum.path, label: 'Форум'},
    ]

    const signInRoute = appRoutes.signIn.path;
    const signUpRoute = appRoutes.signUp.path;

    const onSignOut = async (event: any) => {
        event.preventDefault();
        const response = await api.logOut();
        if (response) {
            setAccess(false);
            history.push(signInRoute);
        }
    }

    const renderSignInButton = () => (<a className={styles.signIn} href={signInRoute}>Войти</a>);

    const renderSignOutButton = () =>
        (<a className={styles.signIn} href='' onClick={onSignOut}>Выйти</a>);

    const renderSignUpButton = () => (<a className={styles.signUp} href={signUpRoute}>Регистрация</a>);

    return {
        routes,
        renderSignInButton,
        renderSignOutButton,
        renderSignUpButton
    }
}