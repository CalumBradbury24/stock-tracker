import * as reducers from "../../Redux/reducers";
import { CHANGE_SHARE_ONE, CHANGE_SHARE_TWO, CHANGE_SHARE_THREE, CHANGE_SHARE_FOUR, CHANGE_SHARE_FIVE } from "../../Redux/types";

describe("setShares", () => {
  it("should return the initial state", () => {
    expect(reducers.setShares(undefined, {})).toEqual({
      numberOfShareOne: 0,
      numberOfShareTwo: 0,
      numberOfShareThree: 0,
      numberOfShareFour: 0,
      numberOfShareFive: 0,
    });
});
   it("should handle CHANGE_SHARE_ONE", () => {
       expect(reducers.setShares(0, {
           type: CHANGE_SHARE_ONE,
           payload: 1       //mock input
       })).toEqual({
           numberOfShareOne: 1
       })
   }) 

   it("should handle CHANGE_SHARE_TWO", () => {
    expect(reducers.setShares(0, {
        type: CHANGE_SHARE_TWO,
        payload: 2       //mock input
    })).toEqual({
        numberOfShareTwo: 2
    })
}) 
it("should handle CHANGE_SHARE_THREE", () => {
    expect(reducers.setShares(0, {
        type: CHANGE_SHARE_THREE,
        payload: 3       //mock input
    })).toEqual({
        numberOfShareThree: 3
    })
}) 
it("should handle CHANGE_SHARE_FOUR", () => {
    expect(reducers.setShares(0, {
        type: CHANGE_SHARE_FOUR,
        payload: 4       //mock input
    })).toEqual({
        numberOfShareFour: 4
    })
}) 
it("should handle CHANGE_SHARE_FIVE", () => {
    expect(reducers.setShares(0, {
        type: CHANGE_SHARE_FIVE,
        payload: 5       //mock input
    })).toEqual({
        numberOfShareFive: 5
    })
}) 
 
});
