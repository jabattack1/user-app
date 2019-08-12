function user(state = [], action) {
  switch (action.type) {
    case "UPDATE_USER":
      var i = action.i;

      state[i].first_name = action.first_name;
      state[i].last_name = action.last_name;
      state[i].email = action.email;
      state[i].role = action.role;
      state[i].status = action.status;
      //return the updated state
      return [...state];

    case "DELETE_USER":
      var i = action.i;

      state.splice(i,1);
      alert('Account Deleted - Going back a page only for demo purposes');
      window.history.back();
      //return the updated state
      return [...state];

    case "CREATE_USER":
      var i = action.i;

      state.push({
        "last_name": action.last_name,
        "first_name": action.first_name,
        "email": action.email,
        "role": action.role,
        "id": action.i.toString(),
        "status": action.status,
        "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
      });
      alert('Account Created - Going back a page only for demo purposes');
      window.history.back();
      //return the updated state
      return [...state];

    default:
      return state;
  }
  return state;
}

export default user;

