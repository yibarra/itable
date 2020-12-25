import React, { FC } from 'react';

import ThemeSwitch from '../../components/ThemeSwitch';

// header
const Header: FC<any> = ({ index, theme, setTheme }) => {
  // render
  return (
    <header>
      <div className="header-top">
        <p>logo</p>

        <p>search</p>
      </div>

      <div className="header-options">

      </div>

      {theme.name && <ThemeSwitch
        index={index}
        setTheme={setTheme}
        theme={theme} />}
    </header>
  );
};

export default Header;