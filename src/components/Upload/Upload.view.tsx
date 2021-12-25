import React, { FC } from "react";
import { Upload as CustomUpload, UploadProps } from "antd";

import styles from "./Upload.module.scss";

interface Props extends UploadProps {}

const Upload: FC<Props> = (props) => {
  return <CustomUpload className={styles.antUpload} {...props} />;
};

export default Upload;
