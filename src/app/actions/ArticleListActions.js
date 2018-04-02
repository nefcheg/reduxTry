import {SET_TAG , SET_LIVESEARCH, SET_DATA} from "../constants";

export const setTag = (tag) => ({
  type: SET_TAG,
  payload: tag
});

export const setLivesearch = (liveSearchString) => ({
  type: SET_LIVESEARCH,
  payload: liveSearchString
});

export const setData = (data) => ({
  type: SET_DATA,
  payload: data
});