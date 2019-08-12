//update
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

//delete
export function deleteUser(i) {
  return {
    type: "DELETE_USER",
    i
  };
}


