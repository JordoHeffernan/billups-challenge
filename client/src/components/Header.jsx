import React from 'react';

import NavBar from './NavBar';

import '../styles/Header.css';

const Header = props => {
  return (
    <header>
      <h1>Rock Paper Scissors Lizard Spock</h1>
      <NavBar />
    </header>
  );
}

export default Header;
