import { shallowEqual, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { useSelector } from "@/hooks/useSelector";
import { useMountEffect } from "@/hooks/useMountEffect";
import { loadTopic } from "@/actions/topic.actions";

export const useTopic = () => {
    const dispatch = useDispatch();
    const { data, isLoading } = useSelector((state) => state.topic, shallowEqual);
    const { pathname } = useLocation();

    const id = pathname.split("/").slice(-1)[0];

    useMountEffect(() => {
        dispatch(loadTopic(Number(id)));
    });

    return {
        topic: data,
        isLoading,
    };
};
