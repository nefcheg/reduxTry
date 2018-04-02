import { combineReducers } from 'redux'
import {articleList} from "./articleList";
import {articleItem} from "./articleItem";

export default combineReducers({ articleList, articleItem });