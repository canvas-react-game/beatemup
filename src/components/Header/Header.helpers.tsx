import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { routes as appRoutes } from "@/config/routes/routes";
import { signOut } from "@/actions/auth.actions";
import { useSelector } from "@/hooks/useSelector";

import Button from "@/components/Button";

export const useHeader = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    const isSignedInOAuth = useSelector((state) => state.auth.isSignedInOAuth);

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
        <Button onClick={onSignOut}>Выйти</Button>
    );

    return {
        routes:
            isSignedIn || isSignedInOAuth
                ? routes
                : routes.filter((route) => route.path === appRoutes.about.path),
        renderSignOutButton,
    };
};
