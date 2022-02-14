import React, {
    FC, useState, useCallback, useEffect,
} from "react";
import "antd/dist/antd.css";

import { Typography, Button } from "antd";

import styles from "./App.module.scss";

import { isServer } from "@/helpers/environment";

const { Title } = Typography;

interface Props {
    onClose: Function;
}

export const ModalChild: FC<Props> = ({ onClose }) => (
    <>
        <Title className={styles.title} level={2}>
            Нет интернет соединения
        </Title>

        <Button type="primary" onClick={() => onClose()}>
            Закрыть
        </Button>
    </>
);

const sw: ServiceWorkerContainer | null = !isServer ? navigator?.serviceWorker : null;

export const useServiceWorkers = () => {
    const [isActive, setActive] = useState(false);

    const onClose = useCallback(() => {
        setActive(false);
    }, []);

    useEffect(() => {
        function startServiceWorker() {
            if (sw) {
                window.addEventListener(
                    "load",
                    () => {
                        sw.register("./sw.js")
                            .then((registration) => {
                                console.log(
                                    "ServiceWorker registration successful ",
                                    registration.scope,
                                );
                            })
                            .then(() => {
                                sw.addEventListener("message", ({ data }) => {
                                    if (data === "FORBIDDEN_METHOD") {
                                        setActive(true);
                                    }
                                });
                            })
                            .catch((error: string) => {
                                console.log(
                                    "ServiceWorker registration failed: ",
                                    error,
                                );
                            });
                    },
                    { once: true },
                );
            }
        }

        startServiceWorker();
    }, []);

    return {
        isActive,
        onClose,
    };
};
