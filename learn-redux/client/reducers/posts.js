// Reducers specify how the application's state changes in response 
// to actions sent to the store. 
// Remember that actions only describe what happened, but don't 
// describe how the application's state changes.

// A reducer takes two things: 

// 1. The action (info about what happened)
// 2. copy of the current state

// Create multiple reducers, then combine them into a larger 'root reducer'

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;