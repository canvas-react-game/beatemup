import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
import AccessRoute from "@/components/AccessRoute";
import AccessRedirectRoute from "@/components/AccessRedirectRoute";

import { routes } from "@/config/routes/routes";

const Routes: FC = () => (
    <Switch>
        <Redirect exact from={"/"} to={routes.signIn.path} />
        <AccessRedirectRoute
            path={routes.signIn.path}
            exact
            component={Login}
        />
        <AccessRedirectRoute
            path={routes.signUp.path}
            exact
            component={SignUpView}
        />
        <AccessRoute path={routes.main.path} exact component={Main} />
        <AccessRoute path={routes.profile.path} exact component={Profile} />
        <AccessRoute path={routes.forum.path} exact component={Forum} />
        <AccessRoute
            path={routes.leaderboard.path}
            exact
            component={Leaderboard}
        />
        <Route path={routes.about.path} exact component={About} />
        <AccessRoute path={routes.game.path} exact component={Game} />
        <Route path={"/error"} exact component={Error} />
        <Route path={"/offline"} exact component={Offline} />
    </Switch>
);

export default Routes;
