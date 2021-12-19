import React, {FC} from "react";
import { UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import styles from './SignUp.module.scss';
import Container from "../../components/Container";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Password from "../../components/Password";
import Nav from "../../components/InnerNavBar";
import Header from "../../components/Header";
import {SignUpFieldNames, SignUpValues, useSignUp} from "./SignUp.helpers";
import {routes} from "../../config/routes/routes";

const SignUp:FC = () => {

    const { onSubmit } = useSignUp();

    const onFinish = (values: SignUpValues) => {
        onSubmit(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <Header/>
            <div className={styles.formContainer}>
                <Nav currentRoute={`/#${routes.signUp.path}`}/>
                <Form
                    name='signUp'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout='vertical'>
                    <Form.Item
                        name={SignUpFieldNames.login}
                        rules={[{ required: true, message: 'Введите логин' }]}>
                        <Input placeholder='логин' prefix={<UserOutlined />}/>
                    </Form.Item>
                    <Form.Item
                        name={SignUpFieldNames.password}
                        rules={[{ required: true, message: 'Введите пароль' }]}>
                        <Password placeholder='пароль' />
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">Заргеистрироваться</Button>
                    </Form.Item>
                </Form>
            </div>
        </Container>
    );
};

export default SignUp;