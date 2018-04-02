import {SET_ARTICLE} from "../constants";

const initialState = {
  currentArticle: {},
  //isWaiting: false
};

export const articleItem = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE: {
      return {...state, currentArticle: action.payload};
    }

    default: return state;
  }
};