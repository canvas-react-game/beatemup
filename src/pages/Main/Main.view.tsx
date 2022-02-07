import React, { FC } from "react";
import { Typography } from "antd";

import { useDispatch } from "react-redux";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";

import styles from "./Main.module.scss";
import { getProfile } from "@/actions/profile.actions";
import { useMountEffect } from "@/hooks/useMountEffect";
import { Link } from "react-router-dom";

const Main: FC = () => {
    const {
        gameHref, title, info, infoContainer, container,
    } = styles;

    const dispatch = useDispatch();

    useMountEffect(() => {
        dispatch(getProfile());
    });

    return (
        <Container>
            <Header/>
            <div className={container}>
                <div className={infoContainer}>
                    <Typography className={title}>Игра</Typography>
                    <Typography className={info}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Link to={routes.game.path} className={gameHref}>Играть</Link>
                </div>
            </div>
        </Container>
    );
};

export default Main;
