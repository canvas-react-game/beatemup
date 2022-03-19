import {
    createStore, compose, combineReducers, applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { profileReducer, ProfileState } from "@/reducers/profile.reducer";
import { authReducer, AuthState } from "@/reducers/auth.reducer";
import { themeReducer, ThemeState } from "@/reducers/theme.reducer";
import {
    leaderBoardReducer,
    LeaderBoardState,
} from "@/reducers/leaderboard.reducer";

import { isServer } from "@/helpers/environment";

export interface RootState {
    auth: AuthState;
    profile: ProfileState;
    leaderBoard: LeaderBoardState;
    theme: ThemeState
}

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    leaderBoard: leaderBoardReducer,
    theme: themeReducer,
});

const configureStore = () => createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        !isServer && window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f: () => void) => f,
    ),
);

export default configureStore;
