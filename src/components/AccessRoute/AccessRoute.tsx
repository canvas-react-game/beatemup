import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

import { checkAccess } from "@/helpers/acess";
import Error from "@/pages/Error";

export const AccessRoute: FC<RouteProps> = ({ component, ...props }) => {
    const Component = component as React.ComponentClass | React.FunctionComponent;
    const isSignedIn = checkAccess();

    return (
        <Route
            {...props}
            render={() => (isSignedIn
                ? <Component /> : <Error status='403' />)
            }
        />
    );
};