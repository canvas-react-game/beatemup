import React, {FC} from "react";
import {LoginFieldNames, LoginValues, useLogin} from './Login.helpers';
import { UserOutlined } from '@ant-design/icons';
import { Form, Typography } from 'antd';
import Container from "../../components/Container";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Password from "../../components/Password";

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

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
            <Title level={4}>Войти</Title>
            <Form
                {...layout}
                size='middle'
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
        </Container>
    );
};

export default Login;