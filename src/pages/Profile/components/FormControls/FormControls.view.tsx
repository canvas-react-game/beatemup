import React, { FC } from "react";
import { Form, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";

import Button from "@/components/Button";

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
            type="text"
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
      <Button type="text" onClick={() => setIsEdit(!isEdit)}>
        Редактировать
        <EditOutlined />
      </Button>
    </Form.Item>
  );
};

export default FormControls;
