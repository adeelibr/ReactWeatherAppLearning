import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './components/Main';
import WeatherPage from './components/WeatherPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ExamplesPage from './components/ExamplesPage';

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!./styles/app.scss');
$(document).foundation();

let App = React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={WeatherPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/examples" component={ExamplesPage}/>
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
