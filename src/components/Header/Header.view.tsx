import React, { FC } from "react";

import { Link } from "react-router-dom";
import { routes as appRoutes } from "@/config/routes/routes";
import { useSelector } from "@/hooks/useSelector";

import styles from "./Header.module.scss";
import NavBar from "../NavBar";
import { useHeader } from "./Header.helpers";

interface Props {
    currentPath?: string;
}

const Header: FC<Props> = ({ currentPath }) => {
    const { renderSignOutButton } = useHeader();

    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    const isSignedInOAuth = useSelector((state) => state.auth.isSignedInOAuth);

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link to={appRoutes.main.path}>Logo</Link>
            </div>
            <div className={styles.routesContainer}>
                <NavBar currentPath={currentPath} />
                <div className={styles.buttonContainer}>
                    {(isSignedIn || isSignedInOAuth) && renderSignOutButton()}
                </div>
            </div>
        </div>
    );
};

export default Header;
