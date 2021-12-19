import React, {FC} from "react";
import { LoginOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import styles from './SignUp.module.scss';
import Container from "../../components/Container";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Nav from "../../components/InnerNavBar";
import Header from "../../components/Header";
import { SignUpValues, useSignUp} from "./SignUp.helpers";
import {routes} from "../../config/routes/routes";

const SignUp:FC = () => {
    const { fieldSet, onSubmit } = useSignUp();

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
                        {fieldSet.map(set =>
                            <Form.Item name={set.name} rules={set.rules}>
                                <Input type={set.type ?? ''} placeholder={set.placeholder} />
                            </Form.Item>
                        )}
                    <div className={styles.link}>
                        <LoginOutlined className={styles.icon}/>
                        <a href={''}>Войти через Яндекс</a>
                    </div>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">Заргеистрироваться</Button>
                    </Form.Item>
                </Form>
            </div>
        </Container>
    );
};

export default SignUp;