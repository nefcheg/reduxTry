import {SET_DATA, SET_LIVESEARCH, SET_TAG, GET_DATA_SUCCESS, GET_DATA_REQUEST} from "../constants";

const initialState = {
  currentTag: null,
  liveSearchString: "",
  dataObject: [],
  isWaiting: false
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

    case GET_DATA_REQUEST: {
      return {...state, isWaiting: true}
    }

    case GET_DATA_SUCCESS: {
      return {...state, isWaiting: false, dataObject: action.payload.data}
    }

    default: return state;
  }
};