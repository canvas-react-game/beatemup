import React, { FC } from "react";
import { Comment } from "antd";

import styles from "./Comment.module.scss";

interface Props {
    author?: string,
    message: string,
}

const CommentContainer: FC<Props> = ({ author, message }) => (
    <Comment
        className={styles.comment}
        author={<a>{author ?? "Author"}</a>}
        content={
            <p>{message}</p>
        }
    />
);

export default CommentContainer;
