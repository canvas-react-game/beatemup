import {useEffect} from 'react';

/**
 * Вызывает effectCallback при маунте компонента
 */
export const useMountEffect = (effectCallback: () => (() => void) | void) => {
    useEffect(effectCallback, []);
};