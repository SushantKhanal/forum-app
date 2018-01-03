import { combineReducers } from 'redux'

import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  SELECT_CATEGORY,
} from '../actions'

import categories from '../api-server/categories.js'
import posts from '../api-server/posts.js'


const postState = {
    author:null,
    body:null,
    category:null,
    commentCount:null,
    deleted:false,
    id:null,
    timestamp:null,
    title:null,
    voteScore:null  
}

function postReducer (state = postState, action) {
  const { author, body, category, id, timestamp, title, commentCount, voteScore, deleted } = action
  switch (action.type) {
    case ADD_POST :
      return {
        ...state,
          [author]: author,
          [body]: body,
          [category]: category,
          [commentCount]: 0,
          ...state[deleted],
          [id]:id,
          [timestamp]:timestamp,
          [title]:title,
          [voteScore]:0,
        }
    
    case REMOVE_POST :
      return {
        ...state,
          [deleted]: true,
        }
      
    case EDIT_POST :
      return {
        ...state,
          [author]: author,
          [body]: body,
          [category]: category,
          ...state[commentCount],
          ...state[deleted],
          ...state[id],
          [timestamp]:timestamp,
          [title]:title,
          ...state[voteScore],
        }
          
    default :
      return state
  }
}

export default combineReducers({
  postReducer,
})