import { useHistory, useLocation } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { routes } from "@/config/routes/routes";
import { createTopic, updateTopic } from "@/actions/topic.actions";
import { useSelector } from "@/hooks/useSelector";
import { TopicEditData } from "@/reducers/topic.reducer";

export enum TopicFieldNames {
    Title = "title",
    Body = "body",
}

export const useTopicForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.topic.isLoading);
    const { pathname } = useLocation();

    const id = pathname.split("/").slice(-1)[0];
    const hasId = !isNaN(Number(id));

    const submitLabel = hasId ? "Редактировать" : "Создать";
    const titleLabel = hasId ? "Редактирование темы" : "Создание темы";

    console.log(hasId);

    const onFinish = useCallback(async (data: TopicEditData) => {
        if (hasId) {
            dispatch(updateTopic(Number(id), data));
        } else {
            dispatch(createTopic(data, history));
        }
    }, []);

    const onFinishFailed = (errorInfo: Error) => console.log("Failed:", errorInfo);

    return {
        currentPath: routes.topicEdit.path,
        onFinish,
        onFinishFailed,
        isLoading,
        submitLabel,
        titleLabel,
    };
};
