import React, { FC } from "react";
import { Button as CustomButton, ButtonProps } from "antd";

interface Props extends ButtonProps {}

const Button:FC<Props> = (props) => (<CustomButton {...props}/>);

export default Button;
