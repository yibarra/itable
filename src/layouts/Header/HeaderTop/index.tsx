import React, { FC } from 'react';

import ThemeSwitch from '../../../components/ThemeSwitch';

import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';

import { IHeaderTop } from './interfaces';

import { HeaderTopDiv } from './styles';

// header top
const HeaderTop: FC<IHeaderTop> = ({ active, color, onToggle }) => {
  return (
    <HeaderTopDiv
      data-switch={active}>
      <div className="header--logo">
        <Logo />
        <span className="subtitle">Periodic Table of Elements</span>
      </div>

      <div className="header--theme">
        <ThemeSwitch
          color={color}
          onToggle={onToggle} />
      </div>
    </HeaderTopDiv>
  );
};

export default HeaderTop;