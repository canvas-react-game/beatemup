import React, { useCallback } from "react";
import {
    Form, Space, Row, Col,
} from "antd";

import Container from "@/components/Container";
import Header from "@/components/Header";
import PageMeta from "@/components/PageMeta";
import Upload from "@/components/Upload";
import Statistic from "@/components/Statistic";
import PageLoader from "@/components/PageLoader";

import FormFields from "./components/FormFields";
import FormControls from "./components/FormControls";
import UploadButton from "./components/UploadButton";

import styles from "./Profile.module.scss";

import { useProfileForm } from "./Profile.helpers";
import { checkOAuthSigned } from "@/helpers/acess";

const Profile = () => {
    const {
        currentPath,
        onFinish,
        isEdit,
        setIsEdit,
        avatar,
        profile,
        form,
        isLoading,
    } = useProfileForm();

    const handleChangeAvatar = useCallback(
        () => ({ fileList }: any) => console.log(fileList),
        [],
    );
    const isOAuthSigned = checkOAuthSigned();

    return (
        <PageLoader isSpinning={isLoading}>
            <Container>
                <PageMeta title="Profile" description="Profile page" />
                <Header currentPath={currentPath} />
                <div className={styles.formContainer}>
                    <Space direction="vertical" size="middle">
                        <Row justify="space-between">
                            <Col>
                                <Statistic title="Рекорд" value={100} />
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
                            initialValues={profile}
                            layout="vertical"
                        >
                            <FormFields isEdit={isEdit} />

                            {!isOAuthSigned && (
                                <FormControls
                                    isEdit={isEdit}
                                    setIsEdit={setIsEdit}
                                    form={form}
                                    onFinish={onFinish}
                                />
                            )}
                        </Form>
                    </Space>
                </div>
            </Container>
        </PageLoader>
    );
};

export default Profile;
