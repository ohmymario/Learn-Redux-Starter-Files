// COMBINE PROPS, ACTIONCREATORS AND MAIN COMPONENT

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import all actionCreator methods 
import * as actionCreators from '../actions/actionCreators';

// Component to pass props into
import Main from './Main';

// State
function mapsStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// actionCreators
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
} 

// Surface State and actionCreators to the "Main" component
const App = connect(mapsStateToProps, mapDispatchToProps)(Main);

export default App;