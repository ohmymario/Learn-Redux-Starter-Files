// Reducers specify how the application's state changes in response 
// to actions sent to the store. 
// Remember that actions only describe what happened, but don't 
// describe how the application's state changes.

// A reducer takes two things: 

// 1. The action (info about what happened)
// 2. copy of the current state

// Create multiple reducers, then combine them into a larger 'root reducer'

// Pure function | creates copy of state, returns modified copy
function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log("INCREMENTING LIKES");
      const i = action.index;
      return [
        ...state.slice(0,i), // Before the one we are updating.
        {...state[i], likes: state[i].likes + 1}, // Copying and incrementing likes
        ...state.slice(i + 1), // After the one we are updating
      ]
    // return the updated state
    default: 
      return state;
  }
}

// Impure function | modifies state directly
// function posts(state =[], action) {
//   state[action.i].likes++;
//   return state;
// } 

export default posts;