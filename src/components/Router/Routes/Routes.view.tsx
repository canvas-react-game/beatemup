import React, { FC, useEffect } from "react";
import {
    Switch, Route, Redirect, useLocation, useHistory,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { getProfile } from "actions/profile.actions";
import Login from "@/pages/SignIn";
import SignUpView from "@/pages/SignUp";
import Main from "@/pages/Main";
import Profile from "@/pages/Profile";
import Forum from "@/pages/Forum";
import About from "@/pages/About";
import Leaderboard from "@/pages/Leaderboard";
import Error from "@/pages/Error";
import Game from "@/pages/Game";
import { routes } from "@/config/routes/routes";
import AccessRoute from "@/components/AccessRoute";
import api from "@/api/OAuth";
import { signInOAuth } from "@/actions/auth.actions";

const Routes: FC = () => {
    const { search } = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const code = new URLSearchParams(search).get("code");
        if (code) {
            api.signUpWithYandex(code)
                .then(() => {
                    dispatch(signInOAuth(history));
                    dispatch(getProfile());
                });
        }
    }, []);

    return (
        <Switch>
            <Redirect exact from={"/"} to={routes.signIn.path}/>
            <Route path={routes.signIn.path} exact component={Login}/>
            <Route path={routes.signUp.path} exact component={SignUpView}/>
            <AccessRoute path={routes.main.path} exact component={Main}/>
            <AccessRoute path={routes.profile.path} exact component={Profile}/>
            <AccessRoute path={routes.forum.path} exact component={Forum}/>
            <AccessRoute path={routes.leaderboard.path} exact component={Leaderboard}/>
            <Route path={routes.about.path} exact component={About}/>
            <AccessRoute path={routes.game.path} exact component={Game}/>
            <Route path={"/error"} exact component={Error}/>
        </Switch>
    );
};

export default Routes;
