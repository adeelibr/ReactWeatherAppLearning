import React from 'react';
import Nav from './Nav';

let Main = (props) => {
  return (
    <div>
      <Nav />
      <p>Main</p>
      {props.children}
    </div>
  );
};

export default Main;
