import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import all actionCreator methods 
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapsStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapsDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
} 

const App = connect(mapsStateToProps, mapsDispatchToProps)(Main);

export default App;