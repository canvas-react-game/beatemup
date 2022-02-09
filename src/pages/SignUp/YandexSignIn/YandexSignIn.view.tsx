import React, {FC} from "react";
import { LoginOutlined } from "@ant-design/icons";

import Button from "@/components/Button";
import api from "@/api/OAuth";

import styles from "./YandexSignIn.module.scss";

const providerURLroot = 'https://oauth.yandex.ru/authorize?response_type=code';

const redirectURI = 'http://localhost:3000'; // или просто localhost:5000

const providerURL = (clientId: string) =>
    `${providerURLroot}&client_id=${clientId}&redirect_uri=${redirectURI}`;

const YandexSignIn: FC = () => {

    const onSignIn = async () => {
        api.getServiceId(redirectURI)
            .then((serviceId) => {
                console.log(serviceId);
                //@ts-ignore
                window.open(providerURL(serviceId), '_blank').focus();
                })
    };

    return (
        <Button className={styles.link} onClick={onSignIn} >
            <LoginOutlined className={styles.icon}/>
            Войти через Яндекс
        </Button>
    );
}

export default YandexSignIn;
