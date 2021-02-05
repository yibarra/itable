import React, { FC } from 'react';

import HeaderFilters from './HeaderFilters';
import HeaderTop from './HeaderTop';

import { IHeader } from './interfaces';

import { HeaderContainer } from './styles';

// header
const Header: FC<IHeader> = ({ element, color, onToggle, setElement }) => {
  const active = element instanceof Object ? true : false;

  // render
  return (
    <HeaderContainer
      data-switch={element instanceof Object}>
      <div className="header--content">
        <HeaderTop
          active={active}
          color={color}
          onToggle={onToggle} />

        <HeaderFilters
          active={active}
          color={color}
          setElement={setElement} />
      </div>
    </HeaderContainer>
  );
};

export default Header;