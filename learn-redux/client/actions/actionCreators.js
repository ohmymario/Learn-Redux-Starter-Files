// Increment
export function increment(index) {
  return {
    // names of the action that gets dispatched
    type: 'INCREMENT_LIKES',
    // Identifier for which post needs to be incremented
    index
  }
}

// add comment 
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    // Payload
    postId, 
    author, 
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    // Identifier
    i,
    postId
  }
}