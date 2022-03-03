import React, { FC, useCallback, useState } from "react";
import { Input } from "antd";

import styles from "./CommentInput.module.scss";

import Button from "@/components/Button";

const { TextArea } = Input;

const CommentInput: FC = () => {
    const [message, setMessage] = useState("");

    const handleInput = useCallback((e: any) => setMessage(e.target.value), []);
    const handleSubmit = useCallback(() => console.log(message), [message]);

    return (
        <>
            <div className={styles.container}>
                <TextArea maxLength={100} rows={3} onChange={handleInput} value={message} />
            </div>
            <div className={styles.buttonContainer} >
                <Button type="primary" onClick={handleSubmit}>Отправить</Button>
            </div>
        </>
    );
};

export default CommentInput;
