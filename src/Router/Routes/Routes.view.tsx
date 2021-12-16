import React, {FC} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";


const Routes: FC = () => {
  return (
      <Switch>
        <Redirect exact from={'/'} to={'/signin'}/>
        <Route path={'/signin'} exact component={Login}/>
        <Route path={'/signup'} exact component={SignUp}/>
      </Switch>
  );
};

export default Routes;