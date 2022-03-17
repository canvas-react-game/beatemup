import React, { FC } from "react";
import {Button, Form, Input as AntInput, Typography} from "antd";
import { UserOutlined } from "@ant-design/icons";

import Container from "@/components/Container";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import PageLoader from "@/components/PageLoader";
import Input from "@/components/Input";

import styles from "./TopicEdit.module.scss";
import { TopicFieldNames, useTopicForm } from "./TopicEdit.helpers";

const { TextArea } = AntInput;

const TopicEdit: FC = () => {
    const { isLoading, onFinish, onFinishFailed, currentPath, submitLabel, titleLabel } = useTopicForm();

    return (
        <PageLoader isSpinning={isLoading}>
            <Container>
                <PageMeta title="Topic" description="About game" />
                <Header currentPath={currentPath} />
                <div className={styles.container}>
                    <Typography className={styles.title}>{titleLabel}</Typography>
                    <Form
                        name="topicCreate"
                        onFinish={onFinish}
                        onFinishFailed={() => onFinishFailed}
                        layout="vertical"
                    >
                        <Form.Item
                            name={TopicFieldNames.Title}
                            rules={[
                                {
                                    required: true,
                                    message: "Введите заголовок топика",
                                },
                            ]}
                        >
                            <Input
                                placeholder="заголовок"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                        <Form.Item
                            name={TopicFieldNames.Body}
                            rules={[
                                {
                                    required: true,
                                    message: "Введите описание топика",
                                },
                            ]}
                        >
                            <TextArea maxLength={100} rows={6} placeholder="описание" />
                        </Form.Item>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                {submitLabel}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Container>
        </PageLoader>
    );
};

export default TopicEdit;
