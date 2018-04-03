import {SET_TAG , SET_LIVESEARCH, SET_DATA, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "../constants";
import importData from "../GetData"

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

export const getData = () => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA_REQUEST,
    });

     importData().then((data) => {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: data
      });
    })
  }
};
