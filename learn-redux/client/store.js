import { createStore , compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browerHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// Import the data
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
  posts,
  comments
};

// You can pass in an object literal in the [defaultState] position
const store = createStore(rootReducer, defaultState); 

export const history = syncHistoryWithStore(browerHistory, store);
export default store;
