import React from 'react'
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

export default App;