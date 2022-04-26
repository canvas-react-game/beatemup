import React, { FC } from "react";
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    useHistory,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import api from "@/api/OAuth";
import { signInOAuth } from "@/actions/auth.actions";
import { useMountEffect } from "@/hooks/useMountEffect";

import { getProfile } from "@/actions/profile.actions";
import Login from "@/pages/SignIn";
import SignUpView from "@/pages/SignUp";
import Main from "@/pages/Main";
import Profile from "@/pages/Profile";
import Forum from "@/pages/Forum";
import About from "@/pages/About";
import Leaderboard from "@/pages/Leaderboard";
import Error from "@/pages/Error";
import Game from "@/pages/Game";
import Offline from "@/pages/Offline";
import Topic from "@/pages/Topic";
import TopicEdit from "@/pages/TopicEdit";
import AccessRoute from "@/components/AccessRoute";
import AccessRedirectRoute from "@/components/AccessRedirectRoute";

import { routes } from "@/config/routes/routes";

const Routes: FC = () => {
    const { search } = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    useMountEffect(() => {
        const code = new URLSearchParams(search).get("code");
        if (code) {
            api.signUpWithYandex(code).then(() => {
                dispatch(signInOAuth(history));
                dispatch(getProfile());
            });
        }
    });

    return (
        <Switch>
            <Redirect exact from={"/"} to={routes.signIn.path} />
            <AccessRedirectRoute
                path={routes.signIn.path}
                component={Login}
            />
            <AccessRedirectRoute
                path={routes.signUp.path}
                component={SignUpView}
            />
            <AccessRoute path={routes.main.path} component={Main} />
            <AccessRoute path={routes.profile.path} component={Profile} />
            <AccessRoute exact path={routes.forum.path} component={Forum} />
            <AccessRoute path={routes.topic.path} component={Topic} />
            <AccessRoute exact path={routes.topicEdit.path} component={TopicEdit} />
            <AccessRoute
                path={routes.leaderboard.path}
                component={Leaderboard}
            />
            <Route path={routes.about.path} component={About} />
            <AccessRoute path={routes.game.path} component={Game} />
            <Route path={"/error"} component={Error} />
            <Route path={"/offline"} component={Offline} />
        </Switch>
    );
};

export default Routes;
