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

//create
export function create(i, first_name, last_name, email, role, status) {
  console.log('sh');
  return {
    type: "CREATE_USER",
    i,
    first_name,
    last_name, 
    email, 
    role, 
    status
  };
}


