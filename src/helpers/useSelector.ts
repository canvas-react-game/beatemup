import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

import {AppState} from "@/store/store";

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;