import React, {FC} from "react";
import { Input as CustomInput, InputProps } from 'antd';
import styles from './Input.module.scss';

interface Props extends InputProps {}

const Input:FC<Props> = (props) =>
    (<CustomInput className={styles.input}  {...props}/>);

export default Input;