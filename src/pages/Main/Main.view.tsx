import React, { FC } from "react";
import { Typography, Button } from "antd";

// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Container from "@/components/Container";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";

import { routes } from "@/config/routes/routes";
import styles from "./Main.module.scss";
// import { getProfile } from "@/actions/profile.actions";
// import { useMountEffect } from "@/hooks/useMountEffect";

const { Text } = Typography;

const Main: FC = () => {
    const {
        title, info, infoContainer, container,
    } = styles;

    // const dispatch = useDispatch();

    // useMountEffect(() => {
    //     dispatch(getProfile());
    // });

    return (
        <Container>
            <PageMeta title="Main" description="Main page" />
            <Header />
            <div className={container}>
                <div className={infoContainer}>
                    <Typography className={title}>
                        <span className={styles.titleMain}>Ultimate</span>
                        <Text type="secondary"> Dungeon Crawler</Text>
                    </Typography>
                    <Typography className={info}>
                        Очисти некогда великую обитель от насилия монстров и заблудших душ
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
