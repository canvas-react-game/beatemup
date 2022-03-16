import React, { FC } from "react";
import { Typography } from "antd";

import Container from "@/components/Container";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";
import PageLoader from "@/components/PageLoader";

import styles from "./Topic.module.scss";
import CommentContainer from "./Comment";
import CommentInput from "./CommentInput";
import { useTopic } from "./Topic.helpers";

const { Title } = Typography;

const Topic: FC = () => {
    const { data, isLoading } = useTopic();
    console.log(data);

    return (
        <PageLoader isSpinning={isLoading}>
            <Container>
                <PageMeta title="Topic" description="About game" />
                <Header currentPath={routes.topic.path} />
                <div className={styles.container}>
                    <Title level={2}>Топик</Title>
                    <div className={styles.comments}>
                        <CommentContainer/>
                        <CommentContainer/>
                        <CommentContainer/>
                    </div>
                    <CommentInput/>
                </div>
            </Container>
        </PageLoader>
    );
};

export default Topic;
