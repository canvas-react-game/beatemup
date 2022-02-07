import React, { FC, useCallback } from "react";
import { Button, Form, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { FormElement } from "../../Profile.types";
import styles from "./FormControls.module.scss";

const FormControls: FC<FormElement> = ({
    isEdit,
    setIsEdit,
    onFinish,
    form,
}) => {
    const handleCancel = useCallback(() => {
        setIsEdit(!isEdit);
        form.resetFields();
    }, [form, isEdit]);

    const handleEdit = useCallback(() => {
        setIsEdit(!isEdit);
    }, [isEdit]);

    if (isEdit) {
        return (
            <>
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
            Сохранить<EditOutlined />
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button block className={styles.cancelButton} type="default" onClick={handleCancel}>
                        Отменить
                    </Button>
                </Form.Item>
            </>
        );
    }

    return (
        <Form.Item>
            <Button block type="primary" onClick={handleEdit}>
                Редактировать<EditOutlined />
            </Button>
        </Form.Item>
    );
};

export default FormControls;
