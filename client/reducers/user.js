//a reducer takes in two things:

//1. the action(info about what happened)
//2. copy of current state

function user(state = [], action) {
  // console.log('the post will change');
  // console.log(state, action);
  switch (action.type) {
    case "INCREMENT_LIKES":
      // console.log('incrementing likes');
      const i = action.index;
      //return the updated state
      return [
        ...state.slice(0, i), //before the one we are updating
        { ...state[i]},
        ...state.slice(i + 1) //after the one we are updating
      ];
    default:
      return state;
  }
  // state[action.i].likes++;
  // return state;
}

export default user;