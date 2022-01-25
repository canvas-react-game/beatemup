import React, { FC } from "react";

import styles from "./Container.module.scss";

export const Container: FC = ({ children }) => (
    <div className={styles.container}>{children}</div>
);