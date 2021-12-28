import React, { FC } from "react";
import { Modal as CustomModal, Typography } from "antd";

import Button from "@/components/Button";

import styles from "./Main.module.scss";

const { Title } = Typography;
interface Props {
  isActive: boolean;
  isPaused: boolean;
  isGameOver: boolean;
  onClose: () => void;
  onStart: () => void;
  onResume: () => void;
}

const Menu: FC<Props> = ({
  isActive,
  isPaused,
  isGameOver,
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

      <Button type="primary" onClick={isPaused ? onResume : onStart}>
        {isPaused ? "Продолжить" : `Начать ${isGameOver ? "заново" : "игру"}`}
      </Button>

      <Button type="primary" onClick={onClose}>
        Вернуться на главную
      </Button>
    </div>
  </CustomModal>
);

export default Menu;
