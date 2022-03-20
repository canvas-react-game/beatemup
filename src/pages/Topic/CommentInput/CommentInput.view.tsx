import React, { FC, useCallback, useState } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { Input } from "antd";

import styles from "./CommentInput.module.scss";

import Button from "@/components/Button";
import { createComment, loadComment } from "@/actions/comments.actions";
import { useSelector } from "@/hooks/useSelector";

const { TextArea } = Input;

const CommentInput: FC = () => {
    const [message, setMessage] = useState("");

    const { data: topic } = useSelector((state) => state.topic, shallowEqual);
    const { data: profile } = useSelector((state) => state.profile, shallowEqual);
    const { isLoading } = useSelector((state) => state.comments, shallowEqual);

    const dispatch = useDispatch();

    const handleInput = useCallback((e: any) => setMessage(e.target.value), []);
    const handleSubmit = useCallback(() => {
        dispatch(createComment({
            message,
            topic_id: topic.id,
            user_id: profile.id,
        }));
        dispatch(loadComment);
    }, [message]);

    return (
        <>
            <div className={styles.container}>
                <TextArea maxLength={100} rows={3} onChange={handleInput} value={message} />
            </div>
            <div className={styles.buttonContainer} >
                <Button disabled={isLoading} type="primary" onClick={handleSubmit}>
                    Отправить
                </Button>
            </div>
        </>
    );
};

export default CommentInput;
