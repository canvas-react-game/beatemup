import React, { FC } from "react";
import { Modal as CustomModal, Typography, Button } from "antd";

import styles from "./Main.module.scss";

const { Title } = Typography;
interface Props {
    isActive: boolean;
    isPaused: boolean;
    isGameOver: boolean;
    isGameWin: boolean;
    onClose: () => void;
    onStart: () => void;
    onResume: () => void;
}

const Menu: FC<Props> = ({
    isActive,
    isPaused,
    isGameOver,
    isGameWin,
    onClose,
    onStart,
    onResume,
}) => (
    <CustomModal
        className={styles.gameModal}
        title="Меню"
        visible={isActive}
        footer={null}
        closable={false}
    >
        <div className={styles.buttonContainer}>
            {isGameOver && (
                <Title className={styles.title} level={3}>
                    Потрачено!
                </Title>
            )}

            {isGameWin && (
                <Title className={styles.title} level={3}>
                    Победа!
                </Title>
            )}

            <Button type="primary" onClick={isPaused ? onResume : onStart}>
                {isPaused ? "Продолжить" : `Начать ${(isGameOver || isGameWin) ? "заново" : "игру"}`}
            </Button>

            <Button type="primary" onClick={onClose}>
                Вернуться на главную
            </Button>
        </div>
    </CustomModal>
);

export default Menu;
