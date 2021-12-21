import React, {FC} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from "@/pages/SignIn";
import SignUpView from "@/pages/SignUp";
import Main from "@/pages/Main";
import Profile from "@/pages/Profile";
import Forum from "@/pages/Forum";
import About from "@/pages/About";
import Leaderboard from "@/pages/Leaderboard";
import {routes} from "@/config/routes/routes";
import Error from "@/pages/Error";// todo
import Game from "@/pages/Game";

// NOTE: Для отладки в этой ветке удобно оставить /game дефолтным
const Routes: FC = () => {
  return (
      <Switch>
        <Redirect exact from={'/'} to={routes.signIn.path}/>
        <Route path={routes.signIn.path} exact component={Login}/>
        <Route path={routes.signUp.path} exact component={SignUpView}/>
        <Route path={routes.main.path} exact component={Main}/>
        <Route path={routes.profile.path} exact component={Profile}/>
        <Route path={routes.forum.path} exact component={Forum}/>
        <Route path={routes.leaderboard.path} exact component={Leaderboard}/>
        <Route path={routes.about.path} exact component={About}/>
        <Route path={'/error'} exact component={Error}/>
        <Route path={routes.game.path} exact component={Game}/>
      </Switch>
  );
};

export default Routes;