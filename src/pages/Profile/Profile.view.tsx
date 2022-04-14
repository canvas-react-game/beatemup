import React from "react";
import {
    Form, Space, Image as AntdImage
} from "antd";

import Container from "@/components/Container";
import Header from "@/components/Header";
import PageMeta from "@/components/PageMeta";
import PageLoader from "@/components/PageLoader";

import FormFields from "./components/FormFields";
import FormControls from "./components/FormControls";

import styles from "./Profile.module.scss";
import ProfileDefault from "../../../assets/images/default_profile.png";

import { useProfileForm } from "./Profile.helpers";

const Profile = () => {
    const {
        currentPath,
        onFinish,
        isEdit,
        setIsEdit,
        isOAuthSigned,
        profile,
        form,
        isLoading,
    } = useProfileForm();

    return (
        <PageLoader isSpinning={isLoading}>
            <Container>
                <PageMeta title="Profile" description="Profile page" />
                <Header currentPath={currentPath} />
                <div className={styles.formContainer}>
                    <Space className={styles.formInnerContainer} direction="vertical" size="middle">
                        {profile.avatar && <AntdImage
                            width={200}
                            height={200}
                            src={profile.avatar}
                            fallback={ProfileDefault}
                        />}
                        {!profile.avatar && <div className={styles.imageEmpty}></div>}
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
