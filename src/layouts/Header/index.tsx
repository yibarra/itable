import React, { FC } from 'react';

import ButtonReturn from '../../components/ButtonReturn';
import Filters from '../../components/Filters';
import ThemeSwitch from '../../components/ThemeSwitch';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import { IHeader } from './interfaces';

import { HeaderContainer } from './styles';

// header
const Header: FC<IHeader> = ({ element, onToggle, setElement }) => {
  // render
  return (
    <HeaderContainer>
      <div className="header--content">
        <div className="header--top">
          <div className="header--logo">
            <Logo />
          </div>

          <div className="header--theme">
            <ThemeSwitch
              color={element instanceof Object ? element.cpkHexColor : ''}
              onToggle={onToggle} />
          </div>
        </div>

        <div className="header--filters">
          {!element && <Filters />}
          {element &&
            <ButtonReturn callback={setElement} text="Return" />}
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;