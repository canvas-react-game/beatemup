import React, { FC } from "react";
import { LoginOutlined } from "@ant-design/icons";

import Button from "@/components/Button";
import api from "@/api/OAuth";

import styles from "./YandexSignIn.module.scss";

const redirectURI = 'http://localhost:3000/signup';

const providerURL = (clientId: string) =>
    `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}
    &redirect_uri=${redirectURI}`;

const YandexSignIn: FC = () => {
    const onSignIn = async () => {
        api.getServiceId(redirectURI)
            .then((serviceId) => {
                console.log(serviceId);
                //@ts-ignore
                window.open(providerURL('6a47c2d866c24ef6842cb844498e36e6'), '_blank').focus();
            })
    };

    return (
        <Button className={styles.link} onClick={onSignIn}>
            <LoginOutlined className={styles.icon}/>
            Войти через Яндекс
        </Button>
    );
}

export default YandexSignIn;
