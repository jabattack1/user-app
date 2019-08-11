//increment
export function update(i, first_name, last_name, email, role, status) {
  return {
    type: "UPDATE_USER",
    i,
    first_name,
    last_name, 
    email, 
    role, 
    status
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
