import {
    createStore, compose, combineReducers, applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { profileReducer, ProfileState } from "@/reducers/profile.reducer";
import { authReducer, AuthState } from "@/reducers/auth.reducer";
import { createBrowserHistory, createMemoryHistory } from 'history';

export interface RootState {
    auth: AuthState,
    profile: ProfileState
}

// A nice helper to tell us if we're on the server
export const isServer = !(
    typeof window !== "undefined" &&
    typeof document !== "undefined"
);

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
});

// const configureStore = () => createStore(rootReducer, compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__
//         ? window.__REDUX_DEVTOOLS_EXTENSION__()
//         : (f: () => void) => f,
// ));

//export default configureStore;
export default (url = '/') => {
    // Create a history depending on the environment
    const history = isServer
      ? createMemoryHistory({
          initialEntries: [url]
        })
      : createBrowserHistory();
    const enhancers = [];
    // Dev tools are helpful
    if (process.env.NODE_ENV === 'development' && !isServer) {
      const devToolsExtension = (window as any).devToolsExtension;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
      }
    }
    const middleware = [thunk]; // routerMiddleware(history)
    const composedEnhancers = compose(
      applyMiddleware(...middleware),
      ...enhancers
    );
    // Do we have preloaded state available? Great, save it.
    const initialState = !isServer ? (window as any).__PRELOADED_STATE__ : {};
    // Delete it once we have it stored in a variable
    if (!isServer) {
      delete (window as any).__PRELOADED_STATE__;
    }
    // Create the store
    const store = createStore(
      rootReducer,
      // connectRouter(history)(rootReducer),
      initialState,
      composedEnhancers
    );
    return {
      store,
      history
    };
};