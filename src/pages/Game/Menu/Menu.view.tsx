import React, {FC, useState} from 'react';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

import styles from './Main.module.scss';

const Menu: FC = () => {
    const [active, setActive] = useState(true);

    const onStart = () => setActive(false);
    const onReturn = () => {
        setActive(false);
        history.back(); // todo
    }

    return (
        <Modal title="Меню" visible={active}  footer={null} closable={false}>
            <div className={styles.buttonContainer}>
                <Button type='primary' onClick={onStart}>Начать игру</Button>
                <Button type='primary' onChange={onReturn}>Вернуться на главную</Button>
            </div>
        </Modal>
    );
};

export default Menu;