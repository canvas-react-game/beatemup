import React, { FC } from "react";
import { Typography } from "antd";

import Container from "@/components/Container";
import { routes } from "@/config/routes/routes";

import styles from "./Error.module.scss";
import { ErrorInfo } from "./Error.helpers";

interface Props {
    status: "404" | "403" | "500"
}

const Error: FC<Props> = ({ status = "404" }) => {
    const {
        container, errorContainer, title, info, back, notFound,
    } = styles;

    return (
        <Container>
            <div className={container}>
                <div className={errorContainer}>
                    <Typography className={title}>{status}</Typography>
                    <Typography className={info}>{ErrorInfo[status]}</Typography>
                    <a href={`#${routes.main.path}`} className={back}>Вернуться</a>
                </div>
                <div className={notFound}/>
            </div>
        </Container>
    );
};

export default Error;