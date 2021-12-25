import React, { FC } from "react";
import { Form, Modal, Space, Row, Col } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Upload from "@/components/Upload";
import Statistic from "@/components/Statistic";

import styles from "./Profile.module.scss";

import { FormElement } from "./Profile.types";
import { useProfileForm } from "./Profile.helpers";

const FormFields: FC<Pick<FormElement, "isEdit">> = ({ isEdit }) => {
  const { fields } = useProfileForm();

  return (
    <>
      {fields.map((item: any, index: any) => {
        const { component, name, message, required, disabled, placeholder } =
          item;

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

const UploadButton = () => {
  return (
    <div>
      <PlusOutlined style={{ color: "white" }} />
      <div style={{ marginTop: 8, color: "white", fontSize: 9 }}>Загрузить</div>
    </div>
  );
};

const Profile = () => {
  const {
    currentPath,
    onFinish,
    isEdit,
    setIsEdit,
    avatar,
    initialValues,
    form,
  } = useProfileForm();

  const handleChangeAvatar = ({ fileList }: any) => console.log(fileList);

  return (
    <Container>
      <Header currentPath={currentPath} />
      <div className={styles.formContainer}>
        <Space direction="vertical" size="middle">
          <Row justify="space-between">
            <Col>
              <Statistic
                style={{ textAlign: "left" }}
                title="Рекорд"
                value={1128}
              />
            </Col>
            <Col>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                disabled={!isEdit}
                onChange={handleChangeAvatar}
              >
                {avatar || <UploadButton />}
              </Upload>
            </Col>
          </Row>

          <Form
            name="profile"
            form={form}
            initialValues={initialValues}
            layout="vertical"
          >
            <FormFields isEdit={isEdit} />
            <FormControls
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              form={form}
              onFinish={onFinish}
            />
          </Form>
        </Space>
      </div>
    </Container>
  );
};

export default Profile;
