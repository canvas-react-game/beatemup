import React, {FC} from 'react';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

import styles from './Main.module.scss';

interface Props {
    active: boolean;
    onClose: () => void;
    onStart: () => void;
}

const Menu: FC<Props> = ({ active, onClose, onStart }) =>
    (
        <Modal title="Меню" visible={active}  footer={null} closable={false}>
            <div className={styles.buttonContainer}>
                <Button type='primary' onClick={onStart}>Начать игру</Button>
                <Button type='primary' onClick={onClose}>Вернуться на главную</Button>
            </div>
        </Modal>
    );

export default Menu;