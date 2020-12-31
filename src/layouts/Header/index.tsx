import React, { FC } from 'react';

import ThemeSwitch from '../../components/ThemeSwitch';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import { HeaderContainer } from './styles';
import Filters from '../../components/Filters';

// header
const Header: FC<any> = ({ onToggle }) => {
  // render
  return (
    <HeaderContainer>
      <div className="header--content">
        <div className="header--logo">
          <Logo />
        </div>

        <div className="header--theme">
          <ThemeSwitch onToggle={onToggle} />
        </div>

        <Filters />
      </div>
    </HeaderContainer>
  );
};

export default Header;