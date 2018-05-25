import React from 'react';

import './SearchIcon.css';

const searchIcon = props => (
  <button 
    className={"SearchIcon"}
    onClick={props.clicked} 
  >
    <div className={"SearchIcon__icon"}>
      <div className={"SearchIcon__icon__top"}></div>
      <div className={"SearchIcon__icon__bottom"}></div>
    </div>
  </button>
);

export default searchIcon;
