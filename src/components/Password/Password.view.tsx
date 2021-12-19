import React, {FC} from "react";
import { Input as CustomInput, InputProps } from 'antd';

import {LockOutlined} from "@ant-design/icons";

import styles from './Password.module.scss';

interface Props extends InputProps {}

const { Password } = CustomInput;

const CustomPassword:FC<Props> = (props) =>
    (<Password className={styles.input} prefix={<LockOutlined />} iconRender={() => false}  {...props}/>);

export default CustomPassword;
