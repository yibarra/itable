import React, { FC } from 'react';

import HeaderFilters from './HeaderFilters';
import HeaderTop from './HeaderTop';

import { IHeader } from './interfaces';

import { HeaderContainer } from './styles';

// header
const Header: FC<IHeader> = ({ element, onToggle, setElement }) => {
  const color: string = element instanceof Object ? element.cpkHexColor : '';

  // render
  return (
    <HeaderContainer
      data-switch={element instanceof Object}>
      <div className="header--content">
        <HeaderTop
          active={element instanceof Object}
          color={color}
          onToggle={onToggle} />

        <HeaderFilters
          active={element instanceof Object}
          color={color}
          setElement={setElement} />
      </div>
    </HeaderContainer>
  );
};

export default Header;