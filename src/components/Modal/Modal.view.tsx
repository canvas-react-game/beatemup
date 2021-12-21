import React, {FC} from 'react';
import { Modal as CustomModal, ModalProps } from 'antd';

import styles from './Modal.module.scss';

const Modal: FC<ModalProps> = (props) =>
    (<CustomModal className={styles.modal} {...props} />);

export default Modal;