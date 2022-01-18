import React, {FC, useEffect} from "react";
import { Typography } from "antd";

import Container from "@/components/Container";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";
import { useDispatch } from "react-redux";

import styles from "./Main.module.scss";
import { getProfile } from "@/actions/profile.actions";

const Main: FC = () => {
    const {
        gameHref, title, info, infoContainer, container,
    } = styles;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
    },[])

    return (
        <Container>
            <Header/>
            <div className={container}>
                <div className={infoContainer}>
                    <Typography className={title}>Игра</Typography>
                    <Typography className={info}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <a href={routes.game.path} className={gameHref}>Играть</a>
                </div>
            </div>
        </Container>
    );
};

export default Main;
