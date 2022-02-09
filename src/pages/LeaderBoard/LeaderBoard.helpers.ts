import { loadLeaderBoard } from "@/actions/leaderboard.actions"
import { useMountEffect } from "@/hooks/useMountEffect"
import { useSelector } from "@/hooks/useSelector"
import { RECORDS_PER_PAGE } from "@/config/leaderboard"
import { useCallback, useEffect, useState } from "react"
import { shallowEqual, useDispatch } from "react-redux"

export const useLeaderBoard = () => {
    const [canMoveLeft, setCanMoveLeft] = useState(false)
    const [canMoveRight, setCanMoveRight] = useState(true)
    const [cursor, setCursor] = useState(0)
    const dispatch = useDispatch()

    const {data, isLoading} = useSelector((state) => state.leaderBoard, shallowEqual)

    useMountEffect(() => {
        dispatch(loadLeaderBoard(cursor))
    })

    useEffect(() => {
        if(data.length < RECORDS_PER_PAGE) {
            setCanMoveRight(false)
        }
        else {
            setCanMoveRight(true)
        }
        if(cursor === 0) {
            setCanMoveLeft(false)
        }
        else {
            setCanMoveLeft(true)
        }
    }, [data])

    const onMoveRight = useCallback(() => {
        setCursor(cursor + RECORDS_PER_PAGE)
        dispatch(loadLeaderBoard(cursor + RECORDS_PER_PAGE))
    }, [data])

    const onMoveLeft = useCallback(() => {
        setCursor(cursor - RECORDS_PER_PAGE)
        dispatch(loadLeaderBoard(cursor - RECORDS_PER_PAGE))        
    }, [data])

    return {
        data,
        isLoading,
        canMoveLeft,
        onMoveLeft,
        canMoveRight,
        onMoveRight
    }
}