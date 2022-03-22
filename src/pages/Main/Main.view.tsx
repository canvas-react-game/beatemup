import React, { FC } from "react";
import { Typography, Button } from "antd";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Container from "@/components/Container";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";

import { routes } from "@/config/routes/routes";
import styles from "./Main.module.scss";
import { getProfile } from "@/actions/profile.actions";
import { useMountEffect } from "@/hooks/useMountEffect";

const Main: FC = () => {
    const {
        title, info, infoContainer, container,
    } = styles;

    const dispatch = useDispatch();

    useMountEffect(() => {
        dispatch(getProfile());
    });

    return (
        <Container>
            <PageMeta title="Main" description="Main page" />
            <Header />
            <div className={container}>
                <div className={infoContainer}>
                    <Typography className={title}>Игра</Typography>
                    <Typography className={info}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </Typography>
                    <Link to={routes.game.path}>
                        <Button type="primary">
                            Играть
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Main;
