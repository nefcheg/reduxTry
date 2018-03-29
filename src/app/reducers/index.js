import { SET_TAG } from "../constants/index";
import { combineReducers } from 'redux'

const initialState = {
  currentTag: null
};

export const articleList = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAG: {
      return {...state, currentTag: action.payload};
    }

    default: return state;
  }
};

export default combineReducers({ articleList });