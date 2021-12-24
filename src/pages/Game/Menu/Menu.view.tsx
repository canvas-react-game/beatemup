import React, {FC} from 'react';
import { Modal as CustomModal } from 'antd';

import Button from '@/components/Button';

import styles from './Main.module.scss';

interface Props {
    active: boolean;
    isPause: boolean;
    onClose: () => void;
    onStart: () => void;
    onResume: () => void;
}

const Menu: FC<Props> = ({ active, isPause, onClose, onStart, onResume }) =>
    (
        <CustomModal className={styles.gameModal} title="Меню" visible={active}  footer={null} closable={false} >
            <div className={styles.buttonContainer}>
                    <Button type='primary' onClick={isPause ? onResume : onStart}>
                        {isPause ? 'Продолжить' : 'Начать игру'}
                    </Button>
                <Button type='primary' onClick={onClose}>Вернуться на главную</Button>
            </div>
        </CustomModal>
    );

export default Menu;