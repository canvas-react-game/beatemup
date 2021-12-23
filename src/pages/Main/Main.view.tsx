import React, { FC } from "react"
import { Typography } from "antd"

import Container from "@/components/Container"
import Header from "@/components/Header"

import styles from "./Main.module.scss"

const Main: FC = () => {
    const {
        gameHref, title, info, infoContainer, container,
    } = styles
    return (
        <Container>
            <Header/>
            <div className={container}>
                <div className={infoContainer}>
                    <Typography className={title}>Игра</Typography>
                    <Typography className={info}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <a href='' className={gameHref}>Играть</a>
                </div>
            </div>
        </Container>
    )
}

export default Main