// To "combine reducers"
import { combinedReducers } from 'redux';
// When we want to store router state inside Redux Store 
// then we have to use routerReducer
import { routerReducer } from 'react-router-redux';

// Reducers
import posts from './posts';
import comments from './comments';

// (reducers, routing)
const rootReducer = combinedReducers({posts, comments, router: routerReducer});

export default rootReducer;