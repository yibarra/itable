import React, { FC } from 'react';

import ThemeSwitch from '../../components/ThemeSwitch';

// header
const Header: FC<any> = ({ onToggle }) => {
  // render
  return (
    <header>
      <div className="header-top">
        <p>logo</p>

        <p>search</p>
      </div>

      <div className="header-options">

      </div>

      <ThemeSwitch onToggle={onToggle} />
    </header>
  );
};

export default Header;