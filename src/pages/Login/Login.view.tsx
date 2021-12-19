import React, {FC} from "react";
import {LoginFieldNames, LoginValues, useLogin} from './Login.helpers';
import { UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import styles from './Login.module.scss';
import Container from "../../components/Container";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Password from "../../components/Password";
import Nav from "../../pages/Login/Nav";
import Header from "../../pages/Login/Header";

const Login:FC = () => {
    const { onSubmit } = useLogin();

    const onFinish = (values: LoginValues) => {
        onSubmit(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <Header/>
            <div className={styles.formContainer}>
                <Nav/>
                <Form
                    name='signIn'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout='vertical'>
                    <Form.Item
                        name={LoginFieldNames.login}
                        rules={[{ required: true, message: 'Введите логин' }]}>
                        <Input placeholder='логин' prefix={<UserOutlined />}/>
                    </Form.Item>
                    <Form.Item
                        name={LoginFieldNames.password}
                        rules={[{ required: true, message: 'Введите пароль' }]}>
                        <Password placeholder='пароль' />
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">Войти</Button>
                    </Form.Item>
                </Form>
            </div>
        </Container>
    );
};

export default Login;