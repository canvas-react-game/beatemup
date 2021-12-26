import React, {FC} from 'react';
import { Route, RouteProps } from 'react-router-dom';

import {checkAccess} from "@/helpers/acess";
import Error from "@/pages/Error";

const AccessRoute: FC<RouteProps> = ({ component: Component , ...props }) => {
    const isSignedIn = checkAccess();

    return (
        <Route
            {...props}
            render={() =>
                isSignedIn ?
                    //@ts-ignore
                    <Component /> : <Error status='403' />
            }
        />
    );
};

export default AccessRoute;