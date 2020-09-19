import {
    CHANGE_SHARE_ONE,
    CHANGE_SHARE_TWO,
    CHANGE_SHARE_THREE,
    CHANGE_SHARE_FOUR,
    CHANGE_SHARE_FIVE
} from './types';

export const setOneValue = (num) => ({
    type: CHANGE_SHARE_ONE, payload: num 
});
export const setTwoValue = (num) => ({
    type: CHANGE_SHARE_TWO, payload: num 
});
export const setThreeValue = (num) => ({
    type: CHANGE_SHARE_THREE, payload: num 
});
export const setFourValue = (num) => ({
    type: CHANGE_SHARE_FOUR, payload: num 
});
export const setFiveValue = (num) => ({
    type: CHANGE_SHARE_FIVE, payload: num 
});
