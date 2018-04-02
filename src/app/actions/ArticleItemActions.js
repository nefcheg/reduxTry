import {SET_ARTICLE} from "../constants";

export const setArticle = (article) => {
  return {
    type: SET_ARTICLE,
    payload: article
  }
};