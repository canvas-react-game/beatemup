import {
    useRef,
} from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useSelector } from "@/hooks/useSelector";
import { useMountEffect } from "@/hooks/useMountEffect";
import { loadForumTopics } from "@/actions/forum.actions";

export const useForum = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const table = useRef<HTMLDivElement>(null);

    const { data, isLoading } = useSelector((state) => state.forum, shallowEqual);

    useMountEffect(() => {
        dispatch(loadForumTopics());
    });

    return {
        data,
        isLoading,
        table,
        history,
    };
};
