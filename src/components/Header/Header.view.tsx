import React, { FC } from "react";

import { Link } from "react-router-dom";
import { Typography } from "antd";

import { useHeader } from "./Header.helpers";
import { routes as appRoutes } from "@/config/routes/routes";
import { useSelector } from "@/hooks/useSelector";

import styles from "./Header.module.scss";
import NavBar from "../NavBar";

const { Text } = Typography;

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
                <Link to={appRoutes.main.path} className={styles.logoSymbols}>
                    <span className={styles.logoMainSymbol}>U</span>
                    <Text type="secondary">DC</Text>
                </Link>
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
