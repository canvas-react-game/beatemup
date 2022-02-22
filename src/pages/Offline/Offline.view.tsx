import React from "react";
import { Typography } from "antd";

import { Link } from "react-router-dom";
import Container from "@/components/Container";

import styles from "./Offline.module.scss";

const Error = () => {
    const { container, errorContainer, title, info, back, notFound } = styles;

    return (
        <Container>
            <div className={container}>
                <div className={errorContainer}>
                    <Typography className={title}>Вы сейчас оффлайн</Typography>
                    <Typography className={info}>
                        Попробуйте зайти позже
                    </Typography>
                    <Link to={"/"} className={back}>
                        Вернуться
                    </Link>
                </div>
                <div className={notFound} />
            </div>
        </Container>
    );
};

export default Error;
