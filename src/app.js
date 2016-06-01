import React from 'react'
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.css'
import './app.css'
import styles from './styles.module.css'

const App = React.createClass({
  render () {
    return (
      <div className={styles.wrapper} >
        Text Text Text
        <i className="fa fa-star"></i>
        <h1> Environment: {__NODE_ENV__} </h1>
      </div>
    );
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
