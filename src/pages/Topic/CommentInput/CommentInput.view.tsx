import React, {ChangeEventHandler, FC, useCallback, useState} from "react";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

import styles from "./CommentInput.module.scss";

import Button from "@/components/Button";

const CommentInput: FC = () => {
    const [message, setMessage] = useState("");
    const handleInput = useCallback(
        (e: ChangeEventHandler<HTMLInputElement>) => setMessage(e.toString()), []);
    return (
        <div className={styles.container}>
            <Input onChange={(e) => handleInput} value={message} />
            <Button icon={<SendOutlined/>} />
        </div>
    );
};

export default CommentInput;
