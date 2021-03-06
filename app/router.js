import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

import Home from './components/home';
import Movies from './components/movies_old';
import MoviesEU from './components/movies_eu';


export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>

      <Route path="/">
        <Route component={SearchLayout}>
          <IndexRoute component={Movies}/>
        </Route>
      </Route>

      <Route path="/Movies">
        <Route component={SearchLayout}>
          <IndexRoute component={Home}/>
        </Route>
      </Route>

      <Route path="/MoviesEU">
        <Route component={SearchLayout}>
          <IndexRoute component={MoviesEU}/>
        </Route>
      </Route>

      </Route>

  </Router>
  )
