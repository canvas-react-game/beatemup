import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { profileReducer, ProfileState } from "@/reducers/profile.reducer";
import { authReducer, AuthState } from "@/reducers/auth.reducer";
import { leaderBoardReducer, LeaderBoardState } from "@/reducers/leaderboard.reducer";

import { isServer } from "@/helpers/environment";

export interface RootState {
<<<<<<< HEAD
    auth: AuthState;
    profile: ProfileState;
=======
    auth: AuthState,
    profile: ProfileState,
    leaderBoard: LeaderBoardState
>>>>>>> 4038294203ed64c632dbe509165bc6bbdc6809de
}

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    leaderBoard: leaderBoardReducer,
});

const configureStore = () =>
    createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            !isServer && window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (f: () => void) => f
        )
    );

export default configureStore;
