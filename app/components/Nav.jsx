import React from 'react';
import { IndexLink, Link } from 'react-router';

let Nav = () => {
  return (
    <div>
      <ul>
        <li><IndexLink to='/' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink></li>
        <li><Link to='/about' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link></li>
        <li><Link to='/contact' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
