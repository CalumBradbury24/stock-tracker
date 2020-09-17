//Represents overall reducer (combination of all reducers)
import { combineReducers } from 'redux';
import {setShares} from './pie-reducer';
//import storage from 'redux-persist/lib/storage';//Use local storage as default storage

const rootReducer = combineReducers({
  // data: dataReducer,
   shares: setShares
});

export default rootReducer;
