import React, { FC } from 'react';

import ThemeSwitch from '../../components/ThemeSwitch';

// header
const Header: FC<any> = ({}) => {
  // render
  return (
    <header>
      <div className="header-top">
        <p>logo</p>

        <p>search</p>
      </div>

      <div className="header-options">

      </div>

      <ThemeSwitch />
    </header>
  );
};

export default Header;