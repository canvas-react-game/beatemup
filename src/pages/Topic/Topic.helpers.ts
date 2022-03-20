import { shallowEqual, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { useSelector } from "@/hooks/useSelector";
import { useMountEffect } from "@/hooks/useMountEffect";
import { loadTopic } from "@/actions/topic.actions";
import { loadComment } from "@/actions/comments.actions";

export const useTopic = () => {
    const dispatch = useDispatch();
    const { data: topic, isLoading: isTopicLoading } = useSelector(
        (state) => state.topic, shallowEqual);
    const { data: comments, isLoading: isCommentsLoading } = useSelector(
        (state) => state.comments, shallowEqual);
    const { pathname } = useLocation();

    const id = Number(pathname.split("/").slice(-1)[0]);

    useMountEffect(() => {
        dispatch(loadTopic(id));
        dispatch(loadComment(id));
    });

    return {
        topic,
        comments,
        isLoading: isCommentsLoading || isTopicLoading,
    };
};
