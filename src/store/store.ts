import { createStore, compose } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { profileReducer, ProfileState } from "@/reducers/profile.reducer";
import { authReducer, AuthState } from "@/reducers/auth.reducer";

export interface RootState {
    auth: AuthState,
    profile: ProfileState
}

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

const configureStore = () =>
    createStore(rootReducer, compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f: () => void) => f
    ));

export default configureStore;