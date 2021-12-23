import React, { FC } from "react";

import styles from "./Container.module.scss";

const Container: FC = ({ children }) => (
    <div className={styles.container}>
        {children}
    </div>
);

export default Container;