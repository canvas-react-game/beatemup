type LoadStatus = 'success' | 'pending' | 'failed';
type Nullable<T> = T | null;

interface User {
    name: string;
    birthday: string;
}

export type UserState = {
    item: Nullable<User>;
    status: LoadStatus;
};

enum actions {
    PENDING= 'PENDING',
    SUCCESS= 'SUCCESS',
    FAILED='FAILED',
    SET_USER_ITEM= 'SET_USER_ITEM',
}

const defaultState: UserState = {
    status: 'failed',
    item: null,
};

interface BaseActionType<T> {
    type: T;
}

// Может иногда совпадать с Reducer-типом
interface ItemActionType extends BaseActionType<keyof typeof actions> {
    item: User;
}

export function userReducer(
    state: UserState = defaultState, {type, item}: ItemActionType): UserState {
    switch (type) {
        case actions.PENDING:
            return {
                ...state,
                status: 'pending',
            };
        case actions.SUCCESS:
            return {
                ...state,
                status: 'success',
            };
        case actions.FAILED:
            return {
                ...state,
                status: 'failed',
            };
        case actions.SET_USER_ITEM:
            return {
                ...state,
                item,
            };
        default:
            return state;
    }
}

export function loadSuccess(): BaseActionType<actions> {
    return {type: actions.SUCCESS};
}
export function loadFailed(): BaseActionType<actions> {
    return {type: actions.FAILED};
}
export function loadPending(): BaseActionType<actions> {
    return {type: actions.PENDING};
}
