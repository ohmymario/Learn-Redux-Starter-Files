// let's go!
import React from 'react';

// react -> html
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


// Dynamic component switching bases on URL path
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
