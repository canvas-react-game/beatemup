import React, { FC } from "react";
import { Button, Form, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { FormElement } from "../../Profile.types";

const FormControls: FC<FormElement> = ({
    isEdit,
    setIsEdit,
    onFinish,
    form,
}) => {
    if (isEdit) {
        return (
            <>
                <Form.Item>
                    <Button
                        onClick={() => {
                            setIsEdit(!isEdit);
                            form.resetFields();
                        }}
                    >
            Отменить
                        <EditOutlined />
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button
                        block
                        type="primary"
                        onClick={() => {
                            Modal.confirm({
                                title: "Сохранить?",
                                content: "Будут изменены данные профиля",
                                cancelText: "Нет",
                                okText: "Да",
                                onOk() {
                                    setIsEdit(false);
                                    onFinish(form.getFieldsValue(true));
                                },
                                onCancel() {
                                    setIsEdit(false);
                                    form.resetFields();
                                },
                            });
                        }}
                    >
            Сохранить
                    </Button>
                </Form.Item>
            </>
        );
    }

    return (
        <Form.Item>
            <Button block type="primary" onClick={() => setIsEdit(!isEdit)}>
        Редактировать
                <EditOutlined />
            </Button>
        </Form.Item>
    );
};

export default FormControls;
