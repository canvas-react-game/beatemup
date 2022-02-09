import { Button } from "antd";
import React, { FC } from "react";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import styles from "./Pagination.module.scss";

type PaginationProps = {
    onMoveLeft: () => void
    canMoveLeft: boolean
    onMoveRight: () => void
    canMoveRight: boolean
    isLoading: boolean
}

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
    return <div className={styles.container}>
        <Button 
            type="default" 
            icon={<LeftOutlined />}
            onClick={props.onMoveLeft}
            disabled={!props.canMoveLeft}
        >
        </Button>
        <Button 
            className={styles.buttonRight}
            type="default" 
            icon={<RightOutlined />}
            onClick={props.onMoveRight}
            disabled={!props.canMoveRight}
        >
        </Button>
    </div>
}

export default Pagination