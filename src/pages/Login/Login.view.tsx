import React, {FC} from "react";
import {LoginFieldNames, LoginValues, useLogin} from './Login.helpers';
import { UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Container from "../../components/Container";

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const Login:FC = () => {
    const { password, onPasswordChange, onSubmit } = useLogin();
    const { Password } = Input;

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
                layout='vertical'
            >

                <Form.Item
                    label='Логин'
                    name={LoginFieldNames.login}
                    rules={[{ required: true, message: 'Введите логин' }]}
                >
                    <Input
                        placeholder='логин'

                        prefix={<UserOutlined />}
                        />
                </Form.Item>

                <Form.Item
                    label='Пароль'
                    name={LoginFieldNames.password}
                    rules={[{ required: true, message: 'Введите пароль' }]}
                >
                    <Password
                        required
                        placeholder='пароль'
                        value={password} onChange={onPasswordChange}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">Войти</Button>
                </Form.Item>
            </Form>
        </Container>
    );
};

export default Login;