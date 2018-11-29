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

// Allows for Redux to be used with React
import { Provider } from 'react-redux';

// Curly brackets = Named export
import store, { history } from './store';

// Dynamic component switching bases on URL path
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
