import React, {FC} from 'react';
import { Modal as CustomModal } from 'antd';

import Button from '@/components/Button';

import styles from './Main.module.scss';

interface Props {
    isActive: boolean;
    isPaused: boolean;
    onClose: () => void;
    onStart: () => void;
    onResume: () => void;
}

const Menu: FC<Props> = ({ isActive, isPaused, onClose, onStart, onResume }) =>
    (
        <CustomModal className={styles.gameModal} title="Меню" visible={isActive}  footer={null} closable={false} >
            <div className={styles.buttonContainer}>
                    <Button type='primary' onClick={isPaused ? onResume : onStart}>
                        {isPaused ? 'Продолжить' : 'Начать игру'}
                    </Button>
                <Button type='primary' onClick={onClose}>Вернуться на главную</Button>
            </div>
        </CustomModal>
    );

export default Menu;