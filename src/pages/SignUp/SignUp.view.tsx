import React, { FC } from "react";
import { Input, Button, Form } from "antd";

import Container from "@/components/Container";
import Nav from "@/components/AuthNavBar";
import Header from "@/components/Header";

import { routes } from "@/config/routes/routes";
import styles from "./SignUp.module.scss";
import { useSignUp } from "./SignUp.helpers";

const SignUp: FC = () => {
    const { currentPath, fieldSet, onFinish, onFinishFailed } = useSignUp();

    return (
        <Container>
            <Header currentPath={routes.signUp.path} />
            <div className={styles.formContainer}>
                <Nav currentPath={currentPath} />
                <Form
                    name="signUp"
                    onFinish={onFinish}
                    onFinishFailed={() => onFinishFailed}
                    layout="vertical"
                >
                    {fieldSet.map((set, index) => (
                        <Form.Item
                            name={set.name}
                            rules={set.rules}
                            key={`${set.name}-${index}`}
                        >
                            <Input
                                type={set.type ?? ""}
                                placeholder={set.placeholder}
                            />
                        </Form.Item>
                    ))}
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Container>
    );
};

export default SignUp;
