import React, { FC, useState } from "react";
import { Form, Modal, Space, Row, Col } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Password from "@/components/Password";
import Upload from "@/components/Upload";
import Statistic from "@/components/Statistic";

import styles from "./Profile.module.scss";
import { FormItem, Component, useProfileForm } from "./Profile.helpers";

const components = {
  Input: Input,
  Password: Password,
};

const uploadButton = (
  <div>
    <PlusOutlined style={{ color: "white" }} />
    <div style={{ marginTop: 8, color: "white", fontSize: 9 }}>Загрузить</div>
  </div>
);

const Profile: FC = () => {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [avatar] = useState<string | undefined>("");
  const [isEdit, setEdit] = useState<boolean>(false);
  const [form] = useState<FormItem[]>([
    {
      name: "name",
      disabled: true,
      required: false,
      placeholder: "Имя",
      component: "Input",
      value: "Андрей",
    },
    {
      name: "surname",
      disabled: true,
      required: false,
      placeholder: "Фамилия",
      component: "Input",
      value: "Иванов",
    },
    {
      name: "email",
      disabled: true,
      required: true,
      message: "Введите эл. почту",
      placeholder: "Эл. почта",
      component: "Input",
      value: "andrey@game.com",
    },
    {
      name: "phone",
      disabled: true,
      required: false,
      placeholder: "Телефон",
      component: "Input",
      value: "+77754443322",
    },
    {
      name: "login",
      disabled: true,
      required: true,
      message: "Введите логин",
      placeholder: "Логин",
      component: "Input",
      value: "andrey",
    },
    {
      name: "password",
      disabled: true,
      required: true,
      message: "Введите пароль",
      placeholder: "Пароль",
      component: "Password",
      value: "andrey",
    },
  ]);

  const { currentPath, onFinish, onFinishFailed } = useProfileForm();

  const handleChangeAvatar = ({ fileList }: any) => console.log(fileList);
  const handlePreview = () => setPreviewVisible(true);
  const handleCancel = () => setPreviewVisible(false);

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
                onPreview={handlePreview}
                onChange={handleChangeAvatar}
              >
                {avatar || uploadButton}
              </Upload>
            </Col>
            <Modal
              visible={previewVisible}
              title="Аватар"
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={avatar} />
            </Modal>
          </Row>

          <Form
            name="signIn"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            {form.map((item, index) => {
              const { component } = item;
              const Item = components[component as Component];

              return (
                <Form.Item
                  key={`item-${index}`}
                  name={item.name}
                  initialValue={item.value}
                  rules={[{ required: item.required, message: item.message }]}
                >
                  <Item
                    disabled={item.disabled && !isEdit}
                    placeholder={item.placeholder}
                  />
                </Form.Item>
              );
            })}
            {isEdit ? (
              <>
                <Form.Item>
                  <Button type="text" onClick={() => setEdit(!isEdit)}>
                    Отменить
                    <EditOutlined />
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    onClick={() => setEdit(false)}
                  >
                    Сохранить
                  </Button>
                </Form.Item>
              </>
            ) : (
              <Form.Item>
                <Button type="text" onClick={() => setEdit(!isEdit)}>
                  Редактировать
                  <EditOutlined />
                </Button>
              </Form.Item>
            )}
          </Form>
        </Space>
      </div>
    </Container>
  );
};

export default Profile;
