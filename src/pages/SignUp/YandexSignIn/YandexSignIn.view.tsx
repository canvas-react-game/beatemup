import React, { FC } from "react";
import { LoginOutlined } from "@ant-design/icons";

import styles from "./YandexSignIn.module.scss";
import Button from "@/components/Button";

const YandexSignIn: FC = () => (
    <Button className={styles.link}>
        <LoginOutlined className={styles.icon}/>
        Войти через Яндекс
    </Button>
);

export default YandexSignIn;
