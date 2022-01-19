import { ProfileAction } from "@/actions/profile.actions";
import { GET_PROFILE } from "@/actions/types/profile.types";

export interface ProfileState {
    profile: {
        id: number;
        second_name: string;
        first_name: string;
        email: string;
        phone: string;
        login: string;
        password: string;
        avatar: string;
    }
}

const initialState: ProfileState = {
    profile: {
        id: 0,
        second_name: '',
        first_name: '',
        email: '',
        phone: '',
        login: '',
        password: '',
        avatar: '',
    }
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileAction) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                 ...action.payload
            };
        default:
            return state;
    }
}