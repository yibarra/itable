import React, { FC, useCallback } from 'react';

import HeaderFilters from './HeaderFilters';
import HeaderTop from './HeaderTop';

import { IHeader } from './interfaces';

import { HeaderDiv, HeaderContainerBgDiv } from './styles';

// header
const Header: FC<IHeader> = ({
  element,
  color,
  onToggle,
  setElement
}) => {
  const active = element instanceof Object ? true : false;
  
  // get color
  const getColor = useCallback((): Object => {
    if (!color) return {};

    return { backgroundColor: color };
  }, [ color ]);

  // render
  return (
    <HeaderDiv
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

        <HeaderContainerBgDiv
          style={getColor()}>
        </HeaderContainerBgDiv>
      </div>
    </HeaderDiv>
  );
};

export default Header;