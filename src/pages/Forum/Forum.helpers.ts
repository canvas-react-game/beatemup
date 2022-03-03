import {
    useRef,
} from "react";
import { useHistory } from "react-router-dom";

export const useForum = () => {
    //const dispatch = useDispatch();
    const history = useHistory();

    const table = useRef<HTMLDivElement>(null);

    //const { data: da, isLoading } = useSelector((state) => state.leaderBoard, shallowEqual);
    const data = [
        { data: { id: 1, title: "XXX", messagesCount: 4 } },
        { data: { id: 2, title: "XXX2", messagesCount: 43 } },
        { data: { id: 3, title: "XXX", messagesCount: 4 } },
        { data: { id: 4, title: "XXX2", messagesCount: 43 } },
        { data: { id: 5, title: "XXX", messagesCount: 4 } },
        { data: { id: 6, title: "XXX2", messagesCount: 43 } },
        { data: { id: 7, title: "XXX", messagesCount: 4 } },
        { data: { id: 8, title: "XXX2", messagesCount: 43 } },
        { data: { id: 9, title: "XXX", messagesCount: 4 } },
        { data: { id: 10, title: "XXX2", messagesCount: 43 } },
    ];

    return {
        data,
        isLoading: false,
        table,
        history,
    };
};
