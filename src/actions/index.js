export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export function addPost ({ author, body, category, id, timestamp, title }) {
  return {
    type: ADD_POST,
    author,
    body,
    category,
    id,
    timestamp,
    title,
  }
}

export function removePost ({ id, deleted }) {
  return {
    type: REMOVE_POST,
    id,
    deleted:true,
  }
}

export function editPost ({ author, body, category, id, timestamp, title, commentCount, voteScore }) {
  return {
    type: EDIT_POST,
    author,
    body,
    category,
    id,
    timestamp,
    title,
    commentCount,
    voteScore,
  }
}
