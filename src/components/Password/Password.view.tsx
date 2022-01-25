import React, { FC } from "react";
import { Input as CustomInput } from "antd";

import { LockOutlined } from "@ant-design/icons";

interface Props {
    placeholder: string
}

const { Password } = CustomInput;

export const CustomPassword:FC<Props> = (props) => (
    <Password
        prefix={<LockOutlined />}
        iconRender={() => false}
        {...props}
    />
);