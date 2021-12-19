import React, {FC} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from "@/pages/SignIn";
import SignUpView from "@/pages/SignUp";
import {routes} from "@/config/routes/routes";


const Routes: FC = () => {
  return (
      <Switch>
        <Redirect exact from={'/'} to={routes.signIn.path}/>
        <Route path={routes.signIn.path} exact component={Login}/>
        <Route path={routes.signUp.path} exact component={SignUpView}/>
      </Switch>
  );
};

export default Routes;