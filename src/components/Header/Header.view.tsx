import React, {FC} from 'react';

import {routes as appRoutes} from "@/config/routes/routes";
import {checkAccess} from '@/helpers/acess';

import styles from "./Header.module.scss";
import NavBar from "../NavBar";
import {useHeader} from "./Header.helpers";

interface Props {
    currentPath?: string;
}

const mainRoute = appRoutes.main.path;

const Header: FC<Props> = ({ currentPath }) => {
    const {
        routes,
        renderSignInButton,
        renderSignOutButton,
        renderSignUpButton
    } = useHeader();

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <a href={mainRoute}>Logo</a>
            </div>
            <div className={styles.routesContainer}>
                <NavBar currentPath={currentPath} routes={routes} />
                <div className={styles.buttonContainer}>
                    {checkAccess() ? renderSignOutButton() : renderSignInButton()}
                    {!checkAccess() && renderSignUpButton()}
                </div>
            </div>
        </div>
    );
};

export default Header;
