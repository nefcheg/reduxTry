import {SET_DATA, SET_LIVESEARCH, SET_TAG} from "../constants";

const initialState = {
  currentTag: null,
  liveSearchString: "",
  dataObject: []
};

export const articleList = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAG: {
      return {...state, currentTag: action.payload};
    }

    case SET_LIVESEARCH: {
      return {...state, liveSearchString: action.payload};
    }

    case SET_DATA: {
      return {...state, dataObject: action.payload}
    }

    default: return state;
  }
};