import React, { FC } from "react";
import { Comment, Avatar } from "antd";

interface Props {
    author?: string,
    message?: string,
}

const CommentContainer: FC<Props> = ({ author, message }) => {
    return (
        <Comment
            author={<a>Hans Olo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources.
                </p>
            }
        />
    );
};

export default CommentContainer;