import {useEffect} from 'react';

/**
 * Вызывает effectCallback при unmount компонента
 */
export const useUnmountEffect = (effectCallback: () => (() => void) | void) => {
    useEffect(() => {
        return () => {
            effectCallback()
        }
    }, []);
};