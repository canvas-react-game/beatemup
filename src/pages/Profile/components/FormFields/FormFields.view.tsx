import React, { FC } from "react";
import { Form } from "antd";

import { useProfileForm } from "../../Profile.helpers";
import { FormElement } from "../../Profile.types";

const FormFields: FC<Pick<FormElement, "isEdit">> = ({ isEdit }) => {
    const { fields, passwordFields } = useProfileForm();

    return (
        <>
            {fields.map((item: any, index: number) => {
                const { component, name, message, required, disabled, placeholder } = item;
                const Item = component;
                return (
                    <Form.Item
                        key={`item-${index}`}
                        name={name}
                        rules={[{ required, message }]}
                    >
                        <Item disabled={disabled && !isEdit} placeholder={placeholder} />
                    </Form.Item>
                );
            })}
            {isEdit && passwordFields.map((item: any, index: number) => {
                const { component, name, message, required, disabled, placeholder } = item;
                const Item = component;
                return (
                    <Form.Item
                        key={`item-${index}`}
                        name={name}
                        rules={[{ required, message }]}
                    >
                        <Item disabled={disabled && !isEdit} placeholder={placeholder} />
                    </Form.Item>
                );
            })}
        </>
    );
};

export default FormFields;
