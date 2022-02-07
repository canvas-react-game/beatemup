import { ProfileAction, ProfileStages } from "@/actions/profile.actions";
import {
    GET_PROFILE,
    PROFILE_LOADING,
    SET_PASSWORD,
    SET_PROFILE,
} from "@/actions/types/profile.types";

export interface ProfileState {
    data: {
        id: number;
        second_name: string;
        first_name: string;
        email: string;
        phone: string;
        login: string;
        password: string;
        avatar: string;
    },
    isLoading: boolean;
    stage: ProfileStages;
}

const initialState: ProfileState = {
    data: {
        id: 0,
        second_name: "",
        first_name: "",
        email: "",
        phone: "",
        login: "",
        password: "",
        avatar: "",
    },
    isLoading: false,
    stage: ProfileStages.INIT,
};

// TODO: нужно указать дефолтное значение для action
// eslint-disable-next-line @typescript-eslint/default-param-last
export const profileReducer = (state: ProfileState = initialState, action: ProfileAction) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                data: { ...action.payload.data },
                isLoading: false,
                stage: ProfileStages.DONE,
            };
        case SET_PROFILE:
            return {
                data: { ...action.payload.data },
                isLoading: false,
                stage: ProfileStages.DONE,
            };
        case SET_PASSWORD:
            return {
                ...state,
                isLoading: false,
                stage: ProfileStages.DONE,
            };
        case PROFILE_LOADING:
            return {
                data: {},
                isLoading: action.payload.isLoading,
                stage: ProfileStages.LOADING,
            };
        default:
            return state;
    }
};
