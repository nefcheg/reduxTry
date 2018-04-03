import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

var ping = function ping(store) {
  return function (next) {
    return function (action) {
      console.log('ping');
      return next(action);
    };
  };
};

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}