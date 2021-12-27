import React, {FC} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from "./Routes/Routes.view";

// todo изменить на browserouter
const Router: FC = () => (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
);

export default Router;
