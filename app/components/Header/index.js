import React from 'react';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from './codemi-394x150.png';

export default function Header() {
  return (
    <NavBar>
      <HeaderLink to="/">
        <Img src={Logo} alt="Codemi - Logo" />
      </HeaderLink>
    </NavBar>
  );
}
