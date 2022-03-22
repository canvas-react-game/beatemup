import {
    createStore, compose, combineReducers, applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { profileReducer, ProfileState } from "@/reducers/profile.reducer";
import { authReducer, AuthState } from "@/reducers/auth.reducer";
import { themeReducer } from "@/reducers/theme.reducer";
import { Theme } from "@/api/Theme/Theme.api";
import { topicReducer, TopicState } from "@/reducers/topic.reducer";
import {
    leaderBoardReducer,
    LeaderBoardState,
} from "@/reducers/leaderboard.reducer";

import { isServer } from "@/helpers/environment";
import { ForumState, forumReducer } from "@/reducers/forum.reducer";

export interface RootState {
    auth: AuthState;
    profile: ProfileState;
    leaderBoard: LeaderBoardState;
    theme: Theme;
    forum: ForumState;
    topic: TopicState;
}

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    leaderBoard: leaderBoardReducer,
    theme: themeReducer,
    forum: forumReducer,
    topic: topicReducer,
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
