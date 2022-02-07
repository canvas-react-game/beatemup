import React, { FC } from "react";
import { Input as CustomInput, InputProps } from "antd";

interface Props extends InputProps {}

const Input:FC<Props> = (props) => (<CustomInput {...props}/>);

export default Input;
