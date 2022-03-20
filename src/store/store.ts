import {
    createStore, compose, combineReducers, applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { profileReducer, ProfileState } from "@/reducers/profile.reducer";
import { authReducer, AuthState } from "@/reducers/auth.reducer";
import { topicReducer, TopicState } from "@/reducers/topic.reducer";
import {
    leaderBoardReducer,
    LeaderBoardState,
} from "@/reducers/leaderboard.reducer";

import { isServer } from "@/helpers/environment";
import { ForumState, forumReducer } from "@/reducers/forum.reducer";
import { CommentsState, commentsReducer } from "@/reducers/comments.reducer";

export interface RootState {
    auth: AuthState;
    profile: ProfileState;
    leaderBoard: LeaderBoardState;
    forum: ForumState;
    topic: TopicState;
    comments: CommentsState;
}

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    leaderBoard: leaderBoardReducer,
    forum: forumReducer,
    topic: topicReducer,
    comments: commentsReducer,
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
