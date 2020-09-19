import { createStore, applyMiddleware } from 'redux';
//Middleware catches and displays actions that get fired (between actions firing and root-reducer)
import logger from 'redux-logger'//Redux Middleware
import thunk from "redux-thunk";
import rootReducer from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleWares = [thunk];
//If process.environment.node evironment is development, log redux actions
if(process.env.NODE_ENV === 'development'){
    middleWares.push(logger);//push logger into middleWares array
}
//export const store = createStore(rootReducer)//Spread in all values in array as individual arguments

export const store = createStore(persistedReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);
   
  