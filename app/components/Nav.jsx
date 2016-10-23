import React from 'react';
import { IndexLink, Link } from 'react-router';

// import ErrorModal from './ErrorModal';

let Nav = React.createClass ({
  onSearch(e) {
    e.preventDefault();
    let location = this.refs.location.value;
    if (location.length > 0) {
      let encodedLocation = encodeURIComponent(location);
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to='/' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink></li>
            <li><Link to='/about' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link></li>
            <li><Link to='/contact' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Contact</Link></li>
            <li><Link to='/examples' activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input ref="location" type="search" placeholder="Search Weather By City"/></li>
              <li><input type="submit" className="button" value="Search" /></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

export default Nav;
