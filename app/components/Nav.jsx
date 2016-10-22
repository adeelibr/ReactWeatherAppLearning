import React from 'react';
import { IndexLink, Link } from 'react-router';

let Nav = React.createClass ({
  onSearch(e) {
    e.preventDefault();
    alert('This Feature Is Coming Soon');
  },

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li createClass="menu-text">React Weather App</li>
            <li><IndexLink to='/' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink></li>
            <li><Link to='/about' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link></li>
            <li><Link to='/contact' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Contact</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search Weather"/></li>
              <li><input type="submit" className="button" value="Search" /></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

export default Nav;
