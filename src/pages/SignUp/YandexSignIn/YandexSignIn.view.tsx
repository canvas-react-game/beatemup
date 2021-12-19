import React, {FC} from 'react';
import styles from './YandexSignIn.module.scss';
import {LoginOutlined} from '@ant-design/icons';

const YandexSignIn: FC = () => (
    <div className={styles.link}>
        <LoginOutlined className={styles.icon}/>
        <a href={''}>Войти через Яндекс</a>
    </div>
);

export default YandexSignIn;