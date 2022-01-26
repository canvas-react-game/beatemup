import React, { FC, ReactNode } from "react";

import { Modal as CustomModal } from "antd";

import styles from "./GameModal.module.scss";

interface Props {
    isActive?: boolean;
    children?: ReactNode;
    title?: string;
}

const GameModal: FC<Props> = ({ isActive, children, title }) => (
    <CustomModal
        className={styles.gameModal}
        title={title}
        visible={isActive}
        footer={null}
        closable={false}
    >
        <div className={styles.buttonContainer}>{children}</div>
    </CustomModal>
);

export default GameModal;
