import React, { FC } from "react";
import { HashRouter } from "react-router-dom";

import Routes from "./Routes/Routes.view";

// todo изменить на browserouter
const Router: FC = () => (
    <HashRouter>
        <Routes/>
    </HashRouter>
);

export default Router;
