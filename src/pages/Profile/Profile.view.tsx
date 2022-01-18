import React, { useCallback } from "react";
import {
    Form, Space, Row, Col,
} from "antd";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Upload from "@/components/Upload";
import Statistic from "@/components/Statistic";

import FormFields from "./components/FormFields";
import FormControls from "./components/FormControls";
import UploadButton from "./components/UploadButton";

import styles from "./Profile.module.scss";

import { useProfileForm } from "./Profile.helpers";

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

    const handleChangeAvatar = useCallback(
        () => ({ fileList }: any) => console.log(fileList),
        [],
    );

    return (
        <Container>
            <Header currentPath={currentPath} />
            <div className={styles.formContainer}>
                <Space direction="vertical" size="middle">
                    <Row justify="space-between">
                        <Col>
                            <Statistic title="Рекорд" value={1128} />
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
