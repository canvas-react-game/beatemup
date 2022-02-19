import React, { FC } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { useSelector } from "@/hooks/useSelector";

import { checkAccess } from "@/helpers/acess";
import { routes } from "@/config/routes/routes";

const AccessRoute: FC<RouteProps> = ({ component, ...props }) => {
    const Component = component as
        | React.ComponentClass
        | React.FunctionComponent;
    const isSignedInCookie = checkAccess();
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    const isSignedInOAuth = useSelector((state) => state.auth.isSignedInOAuth);

    const isSignedInAll = isSignedInCookie || isSignedIn || isSignedInOAuth;

    return (
        <Route
            {...props}
            render={() =>
                !isSignedInAll ? (
                    <Component />
                ) : (
                    <Redirect to={routes.main.path} />
                )
            }
        />
    );
};

export default AccessRoute;
