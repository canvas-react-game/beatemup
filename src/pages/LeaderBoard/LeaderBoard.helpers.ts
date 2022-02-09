import { loadLeaderBoard } from "@/actions/leaderboard.actions"
import { useMountEffect } from "@/hooks/useMountEffect"
import { useSelector } from "@/hooks/useSelector"
import { shallowEqual, useDispatch } from "react-redux"

export const useLeaderBoard = () => {
    const dispatch = useDispatch()

    const {data, isLoading} = useSelector((state) => state.leaderBoard, shallowEqual)

    useMountEffect(() => {
        dispatch(loadLeaderBoard())
    })

    return {
        data,
        isLoading
    }
}