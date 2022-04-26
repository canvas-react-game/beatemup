import React from "react";
import { Form } from "antd";

import { FieldSet } from "../../Profile.helpers";

// TODO: либо отключить правило в eslint либо затянуть конфиг для Prettier
// eslint-disable-next-line max-len
export const renderFieldSet = (fields: FieldSet[], isEdit: boolean) => fields.map((item: any, index: number) => {
    const {
        component: Item, name, message, required, disabled, placeholder,
    } = item;
    return (
        <Form.Item
            key={`item-${index}`}
            name={name}
            rules={[{ required, message }]}
        >
            <Item disabled={disabled && !isEdit} placeholder={placeholder} />
        </Form.Item>
    );
});
