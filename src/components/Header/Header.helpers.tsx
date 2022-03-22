import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "@/actions/auth.actions";
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
