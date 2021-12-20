import Game from "../../pages/Game/Game.view";
import React, {FC} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";

// NOTE: Для отладки в этой ветке удобно оставить /game дефолтным
const Routes: FC = () => {
  return (
      <Switch>
        <Redirect exact from={'/'} to={'/game'}/>
        <Route path={'/signin'} exact component={Login}/>
        <Route path={'/signup'} exact component={SignUp}/>
        <Route path={'/game'} exact component={Game}/>
      </Switch>
  );
};

export default Routes;