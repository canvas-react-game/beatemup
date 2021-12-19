import React, {FC} from "react";
import { Input as CustomInput, InputProps } from 'antd';
import styles from './Password.module.scss';
import {LockOutlined} from "@ant-design/icons";

interface Props extends InputProps {}

const { Password } = CustomInput;

const CustomPassword:FC<Props> = (props) =>
    (<Password className={styles.input} prefix={<LockOutlined />} iconRender={() => false}  {...props}/>);

export default CustomPassword;
