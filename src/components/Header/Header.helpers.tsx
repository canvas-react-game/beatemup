import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "@/hooks/useSelector";
import { signOut } from "@/actions/auth.actions";
import { setTheme } from "@/actions/theme.actions";
import Button from "@/components/Button";

export const useHeader = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSignOut = useCallback(async (event: any) => {
        event.preventDefault();
        dispatch(signOut(history));
    }, []);

    const renderSignOutButton = () => (
        <Button onClick={onSignOut}>Выйти</Button>
    );

    return {
        renderSignOutButton,
    };
};

export const useTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.data.theme);

    const changeTheme = () => {
        dispatch(setTheme({
            theme: theme === "light" ? "dark" : "light",
        }));
    };

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    return {
        theme,
        changeTheme,
    };
};
