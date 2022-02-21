import React, { FC } from "react";
import { Input, Button, Form } from "antd";

import { UserOutlined } from "@ant-design/icons";
import Container from "@/components/Container";
import Password from "@/components/Password";
import Nav from "@/components/AuthNavBar";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";
import PageLoader from "@/components/PageLoader";

import styles from "./SignIn.module.scss";
import { SignInFieldNames, useSignInForm } from "./SignIn.helpers";
import YandexSignIn from "./YandexSignIn/YandexSignIn.view";

const SignIn:FC = () => {
    const { onFinish, onFinishFailed, isLoading } = useSignInForm();

    return (
        <PageLoader isSpinning={isLoading}>
            <Container>
                <Header/>
                <div className={styles.formContainer}>
                    <Nav currentPath={routes.signIn.path}/>
                    <Form
                        name='signIn'
                        onFinish={onFinish}
                        onFinishFailed={() => onFinishFailed}
                        layout='vertical'>
                        <Form.Item
                            name={SignInFieldNames.Login}
                            rules={[{ required: true, message: "Введите логин" }]}>
                            <Input placeholder='логин' prefix={<UserOutlined />}/>
                        </Form.Item>
                        <Form.Item
                            name={SignInFieldNames.Password}
                            rules={[{ required: true, message: "Введите пароль" }]}>
                            <Password placeholder='пароль' />
                        </Form.Item>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit">Войти</Button>
                        </Form.Item>
                        <Form.Item>
                            <YandexSignIn/>
                        </Form.Item>
                    </Form>
                </div>
            </Container>
        </PageLoader>
    );
};

export default SignIn;
