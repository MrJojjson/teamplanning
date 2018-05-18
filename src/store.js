import { compose, applyMiddleware, createStore } from "redux"

import reducers from './reducers'
import { firebaseInit } from './firebase';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise(), thunk);


const loggerMiddleware = store => next => action => {
  next(action);
};
  
  const initialState = {};
  
  const createStoreWithMiddleware = compose(
    applyMiddleware(loggerMiddleware)
  )(createStore);

export default createStore(reducers, firebaseInit, middleware);
