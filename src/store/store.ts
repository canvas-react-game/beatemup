import { createStore } from 'redux';
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

const configureStore = () => createStore(appReducer, applyMiddleware(thunk));

export default configureStore;