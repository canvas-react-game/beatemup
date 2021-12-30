import React, { FC } from "react";
import { LoginOutlined } from "@ant-design/icons";

import styles from "./YandexSignIn.module.scss";

const YandexSignIn: FC = () => (
    <div className={styles.link}>
        <LoginOutlined className={styles.icon} />
        <a href={""}>Войти через Яндекс</a>
    </div>
);

export default YandexSignIn;
