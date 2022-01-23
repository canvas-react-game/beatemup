import {ProfileAction, ProfileStages} from "@/actions/profile.actions";
import {GET_PROFILE, PROFILE_LOADING} from "@/actions/types/profile.types";

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
        second_name: '',
        first_name: '',
        email: '',
        phone: '',
        login: '',
        password: '',
        avatar: '',
    },
    isLoading: false,
    stage: ProfileStages.INIT
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileAction) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                data: { ...action.payload.data },
                isLoading: false,
                stage: ProfileStages.DONE
            };
        case PROFILE_LOADING:
            return {
                data: {},
                isLoading: action.payload,
                stage: ProfileStages.LOADING
            };
        default:
            return state;
    }
}