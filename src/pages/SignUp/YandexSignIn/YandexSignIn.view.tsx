import React, { FC, useCallback } from "react";
import { LoginOutlined } from "@ant-design/icons";

import Button from "@/components/Button";
import api from "@/api/OAuth";

import styles from "./YandexSignIn.module.scss";

const providerURLroot = "https://oauth.yandex.ru/authorize?response_type=code";
const redirectURI = "http://localhost:3000";

const providerURL = (clientId: string) => `${providerURLroot}&client_id=${clientId}
&redirect_uri=${redirectURI}`;

const YandexSignIn: FC = () => {
    const onClick = useCallback(async () => {
        api.getServiceId(redirectURI)
            .then((serviceId) => {
                if (serviceId) {
                    window.location.replace(providerURL(serviceId));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Button className={styles.link} onClick={onClick} >
            <LoginOutlined className={styles.icon}/>
            Войти через Яндекс
        </Button>
    );
};

export default YandexSignIn;
