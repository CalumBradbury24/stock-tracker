import {
  CHANGE_SHARE_ONE,
  CHANGE_SHARE_TWO,
  CHANGE_SHARE_THREE,
  CHANGE_SHARE_FOUR,
  CHANGE_SHARE_FIVE
} from './types';

const initialState = {
  numberOfShareOne: 0,
  numberOfShareTwo: 0,
  numberOfShareThree: 0,
  numberOfShareFour: 0,
  numberOfShareFive: 0,
};

export const setShares = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SHARE_ONE:
      return {
        ...state,
        numberOfShareOne: action.payload,
      };
      case  CHANGE_SHARE_TWO:
      return {
        ...state,
        numberOfShareTwo: action.payload,
      };
      case CHANGE_SHARE_THREE:
      return {
        ...state,
        numberOfShareThree: action.payload,
      };
      case  CHANGE_SHARE_FOUR:
      return {
        ...state,
        numberOfShareFour: action.payload,
      };
      case  CHANGE_SHARE_FIVE:
      return {
        ...state,
        numberOfShareFive: action.payload,
      };
    default:
      return state;
  }
};
