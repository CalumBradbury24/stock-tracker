import * as actions from '../../Redux/actions';
import {
    CHANGE_SHARE_ONE,
    CHANGE_SHARE_TWO,
    CHANGE_SHARE_THREE,
    CHANGE_SHARE_FOUR,
    CHANGE_SHARE_FIVE
  } from '../../Redux/types';

describe("share actions", () => {
    it('should create action to set number of share 1', () => {
        const num = "input";
        const expectedAction = {
            type: CHANGE_SHARE_ONE,
            payload: num
        }
        expect(actions.setOneValue(num)).toEqual(expectedAction)
    });
    it('should create action to set number of share 2', () => {
        const num = 1;
        const expectedAction = {
            type: CHANGE_SHARE_TWO,
            payload: num
        }
        expect(actions.setTwoValue(num)).toEqual(expectedAction)
    });
    it('should create action to set number of share 3', () => {
        const num = 3;
        const expectedAction = {
            type: CHANGE_SHARE_THREE,
            payload: num
        }
        expect(actions.setThreeValue(num)).toEqual(expectedAction)
    });
    it('should create action to set number of share 4', () => {
        const num = 4;
        const expectedAction = {
            type: CHANGE_SHARE_FOUR,
            payload: num
        }
        expect(actions.setFourValue(num)).toEqual(expectedAction)
    });
    it('should create action to set number of share 5', () => {
        const num = 5;
        const expectedAction = {
            type: CHANGE_SHARE_FIVE,
            payload: num
        }
        expect(actions.setFiveValue(num)).toEqual(expectedAction)
    });
    
})
