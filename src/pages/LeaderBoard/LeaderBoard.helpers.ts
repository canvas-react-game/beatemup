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
        const canMoveRight = data.length >= RECORDS_PER_PAGE
        setCanMoveRight(canMoveRight)
        const canMoveLeft = cursor !== 0
        setCanMoveLeft(canMoveLeft)
    }, [data])

    const onMoveRight = useCallback(() => {
        const newCursor = cursor + RECORDS_PER_PAGE
        setCursor(newCursor)
        dispatch(loadLeaderBoard(newCursor))
    }, [data])

    const onMoveLeft = useCallback(() => {
        const newCursor = cursor - RECORDS_PER_PAGE
        setCursor(newCursor)
        dispatch(loadLeaderBoard(newCursor))        
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