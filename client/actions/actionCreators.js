//increment
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

//add comment
export function addComment(userId, author, comment) {
  return {
    type: "ADD_COMMENT",
    userId,
    author,
    comment
  };
}

//remove comment
export function removeComment(userId, i) {
  return {
    type: "REMOVE_COMMENT",
    userId,
    i
  };
}
