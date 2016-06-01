import React from 'react'
import { Link } from 'react-router'

export class Header extends React.Component {
  render () {
    return (
      <div>
        <Link to='/'><h1>Yalp</h1></Link>
        <section>yalp.xyz</section>
      </div>
    );
  }
};

export default Header