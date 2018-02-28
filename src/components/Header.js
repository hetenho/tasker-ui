import React from 'react';
import { header } from '../styles/Header.styles';

const Header = (props) => {
  return (
    <header className={header}>
      <span>Tasker</span>
    </header>
  );
};

export default Header;