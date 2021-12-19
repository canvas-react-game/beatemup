import React, {FC} from "react";
import { Button as CustomButton, ButtonProps } from 'antd';
import styles from './Button.module.scss';

interface Props extends ButtonProps {}

const Button:FC<Props> = (props) =>
    (<CustomButton className={styles.antBtnPrimary}  {...props}/>);

export default Button;