import React from "react";

import { PlusOutlined } from "@ant-design/icons";

import styles from "./UploadButton.module.scss";

const UploadButton = () => (
    <div className={styles.upload}>
        <PlusOutlined />
        <div className={styles.button}>Загрузить</div>
    </div>
);
export default UploadButton;
