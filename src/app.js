import React from 'react'
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.css'
import './app.css'
import App from 'containers/App/App'

import { browserHistory, Router, Route } from 'react-router'

const Home = React.createClass({
  render() {
    return (
      <div>Hello World</div>  
    );
  }
});

const routes = (
  <Router>
    <Route path='/' component={Home} />
  </Router>
);

const mountNode = document.querySelector('#root');
ReactDOM.render(<App history={browserHistory} routes={routes} />, mountNode);
