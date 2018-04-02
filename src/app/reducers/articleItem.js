import {GET_ARTICLE} from "../constants";

const initialState = {
  currentArticle: null,
  isWaiting: false
};

export const articleItem = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE: {
      return {...state, currentArticle: action.payload};
    }

    default: return state;
  }
};