import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory  } from 'react-router';

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

// able to pass in an object literal in the [defaultState] position
const store = createStore(rootReducer, defaultState); 

export const history = syncHistoryWithStore(browserHistory, store);
export default store;

