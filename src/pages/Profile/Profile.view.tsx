import React, { FC, useState } from "react";
import { Form, Modal, Space } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Password from "@/components/Password";
import Upload from "@/components/Upload";

import styles from "./Profile.module.scss";
import { form, Component, useProfileForm } from "./Profile.helpers";

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

  const { currentPath, onFinish, onFinishFailed } = useProfileForm();

  const handleChangeAvatar = ({ fileList }: any) => {
    console.log(fileList);
    // getBase64(file, setAvatar);
  };
  const handlePreview = () => setPreviewVisible(true);
  const handleCancel = () => setPreviewVisible(false);

  return (
    <Container>
      <Header currentPath={currentPath} />
      <div className={styles.formContainer}>
        <Space direction="vertical" size="middle">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            onPreview={handlePreview}
            onChange={handleChangeAvatar}
          >
            {avatar || uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title="Аватар"
            footer={null}
            onCancel={handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={avatar} />
          </Modal>

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
                  rules={[{ required: item.required, message: item.message }]}
                >
                  <Item placeholder={item.placeholder} />
                </Form.Item>
              );
            })}
            <Form.Item>
              <Button type="text">
                Редактировать
                <EditOutlined />
              </Button>
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Сохранить
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </Container>
  );
};

export default Profile;
