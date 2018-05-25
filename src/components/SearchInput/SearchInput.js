import React from 'react';

import './SearchInput.css';
import SearchIcon from './SearchIcon/SearchIcon';

const searchInput = props => (
  <div className={"SearchInput"}>
    <input 
      className={"SearchInput__input"} 
      type="text" 
      placeholder="Search Images"
      onChange={props.changed} 
      onKeyPress={props.keyPressed} 
    />
    <SearchIcon clicked={props.clicked} className={"SearchInput__btn"} />
  </div>
);

export default searchInput;
