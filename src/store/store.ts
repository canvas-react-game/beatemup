import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { profileReducer, ProfileState } from "@/reducers/profile.reducer";
import { authReducer, AuthState } from "@/reducers/auth.reducer";

import { isServer } from "@/helpers/environment";

export interface RootState {
    auth: AuthState;
    profile: ProfileState;
}

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
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
