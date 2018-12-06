// To "combine reducers"
import { combineReducers } from 'redux';
// When we want to store router state inside Redux Store 
// then we have to use routerReducer
import { routerReducer } from 'react-router-redux';

// Reducers to be "combined"
import posts from './posts';
import comments from './comments';

// (reducers, routing)
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;