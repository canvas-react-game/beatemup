import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { userReducer, UserState } from "@/reducers/profile.reducer";
import { authReducer, AuthState } from "@/reducers/auth.reducer";

export interface AppState {
    auth: AuthState,
    profile: UserState
}

const appReducer = combineReducers({
    auth: authReducer,
    profile: userReducer
})

const configureStore = () => createStore(appReducer, applyMiddleware(thunk));

export default configureStore;