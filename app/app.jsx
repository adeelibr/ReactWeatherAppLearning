import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './components/Main';
import WeatherPage from './components/WeatherPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

let App = React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={WeatherPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/contact" component={ContactPage}/>
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
