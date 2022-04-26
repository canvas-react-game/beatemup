import React, { FC } from "react";
import { Switch as CustomSwitch, SwitchProps } from "antd";

interface Props extends SwitchProps {}

const Switch:FC<Props> = (props) => (<CustomSwitch {...props}/>);

export default Switch;
