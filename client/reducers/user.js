//a reducer takes in two things:

//1. the action(info about what happened)
//2. copy of current state

function user(state = [], action) {
  // console.log('the post will change');
  switch (action.type) {
    case "UPDATE_USER":
      const i = action.i;
      console.log(action);
      state[i].first_name = action.first_name;
      state[i].last_name = action.last_name;
      state[i].email = action.email;
      state[i].role = action.role;
      state[i].status = action.status;
      console.log(state);
      //return the updated state
      return [...state];
    default:
      return state;
  }
  // state[action.i].likes++;
  // return state;
}

export default user;
