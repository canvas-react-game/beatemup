import React, { FC, useEffect } from "react";
import {Switch, Route, Redirect, useLocation} from "react-router-dom";

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
import authApi from "@/api/Auth";

const Routes: FC = () => {
    const search = useLocation().search;

    useEffect(() => {
        const code = new URLSearchParams(search).get('code');
        if (code) {
             api.signUpWithYandex(code)
             .then(() => {
                 // todo
                authApi.getUserInfo();
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
}

export default Routes;
