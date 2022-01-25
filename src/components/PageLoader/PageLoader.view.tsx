import React, { FC } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import styles from "./PageLoader.module.scss";

interface Props {
    isSpinning: boolean;
}

const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export const PageLoader: FC<Props> = ({ isSpinning, children }) => (
    <>
        <Spin className={styles.spinner} indicator={antIcon} size={"large"} spinning={isSpinning} />
        <div className={!isSpinning ? styles.init : styles.loading}>
            {children}
        </div>
    </>

);