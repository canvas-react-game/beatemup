import React, { FC } from "react";
import { Comment } from "antd";

import styles from "./Comment.module.scss";

interface Props {
    author?: string,
    message?: string,
}

const CommentContainer: FC<Props> = ({ author, message }) => {
    return (
        <Comment
            className={styles.comment}
            author={<a>{author ?? "author"}</a>}
            content={
                <p>{message ?? "Say what?"}</p>
            }
        />
    );
};

export default CommentContainer;