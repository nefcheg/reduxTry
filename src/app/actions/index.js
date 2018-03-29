import {SET_TAG} from "../constants";

export const setTag = (tag) => ({
  type: SET_TAG,
  payload: tag
});