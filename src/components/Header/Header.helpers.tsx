import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { routes as appRoutes } from "@/config/routes/routes";
import { signOut } from "@/actions/auth.actions";
import { checkAccess } from "@/helpers/acess";

import styles from "./Header.module.scss";

export const useHeader = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isSignedIn = checkAccess();

    const routes = [
        { path: appRoutes.about.path, label: "Об игре" },
        { path: appRoutes.profile.path, label: "Профиль" },
        { path: appRoutes.leaderboard.path, label: "Таблица лидеров" },
        { path: appRoutes.forum.path, label: "Форум" },
    ];

    const onSignOut = useCallback(async (event: any) => {
        event.preventDefault();
        dispatch(signOut(history));
    }, []);

    const renderSignOutButton = () => (
        <a className={styles.signIn} href='' onClick={onSignOut}>Выйти</a>
    );

    return {
        routes: isSignedIn ? routes : routes.filter(route => route.path === appRoutes.about.path),
        renderSignOutButton,
    };
};
