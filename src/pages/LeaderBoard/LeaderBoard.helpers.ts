import {
    useCallback, useEffect, useRef, useState,
} from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { loadLeaderBoard } from "@/actions/leaderboard.actions";
import { useMountEffect } from "@/hooks/useMountEffect";
import { useSelector } from "@/hooks/useSelector";
import { RECORDS_PER_PAGE } from "@/config/leaderboard";
import { isServer } from "@/helpers/environment";

export const useLeaderBoard = () => {
    const [canMoveLeft, setCanMoveLeft] = useState(false);
    const [canMoveRight, setCanMoveRight] = useState(false);
    const [cursor, setCursor] = useState(0);
    const dispatch = useDispatch();

    const table = useRef<HTMLDivElement>(null);
    const [tableScroll, setTableScroll] = useState(!isServer ? window?.innerHeight : 0);

    const { data, isLoading } = useSelector((state) => state.leaderBoard, shallowEqual);

    useMountEffect(() => {
        dispatch(loadLeaderBoard(cursor));
        if (table.current) {
            const tableHeight = table.current.clientHeight;
            const header = table.current.getElementsByClassName("ant-table-header");
            const headerHeight = header.length ? header[0].clientHeight : 0;
            setTableScroll(tableHeight - headerHeight);
        }
    });

    useEffect(() => {
        const canMoveRight = data.length >= RECORDS_PER_PAGE;
        setCanMoveRight(canMoveRight);
        const canMoveLeft = cursor !== 0;
        setCanMoveLeft(canMoveLeft);
    }, [data]);

    const onMoveRight = useCallback(() => {
        const newCursor = cursor + RECORDS_PER_PAGE;
        setCursor(newCursor);
        dispatch(loadLeaderBoard(newCursor));
    }, [data]);

    const onMoveLeft = useCallback(() => {
        const newCursor = cursor - RECORDS_PER_PAGE;
        setCursor(newCursor);
        dispatch(loadLeaderBoard(newCursor));
    }, [data]);

    return {
        data,
        isLoading,
        canMoveLeft,
        onMoveLeft,
        canMoveRight,
        onMoveRight,
        table,
        tableScroll,
    };
};
