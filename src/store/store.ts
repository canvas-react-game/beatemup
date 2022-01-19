import { createStore, compose } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { profileReducer, ProfileState } from "@/reducers/profile.reducer";
import { authReducer, AuthState } from "@/reducers/auth.reducer";

export interface AppState {
    auth: AuthState,
    profile: ProfileState
}

const appReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

const configureStore = () =>
    createStore(appReducer, compose(applyMiddleware(thunk),
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__
            //@ts-ignore
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f: () => void) => f
    ));

export default configureStore;