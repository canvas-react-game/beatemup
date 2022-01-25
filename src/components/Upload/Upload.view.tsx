import React, { FC } from "react";
import { Upload as CustomUpload, UploadProps } from "antd";

import styles from "./Upload.module.scss";

interface Props extends UploadProps {}

export const Upload: FC<Props> = ({
    action,
    listType,
    onPreview,
    onChange,
    disabled,
    children,
}) => (
    <CustomUpload
        className={styles.antUpload}
        action={action}
        listType={listType}
        onPreview={onPreview}
        onChange={onChange}
        disabled={disabled}
        children={children}
    />
);