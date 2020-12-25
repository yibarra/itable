import React, { FC } from 'react';

import ThemeSwitch from '../../components/ThemeSwitch';

// header
const Header: FC<any> = ({ index, styles, setTheme }) => {
  // render
  return (
    <header>
      <div className="header-top">
        <p>logo</p>

        <p>search</p>
      </div>

      <div className="header-options">

      </div>


      <ThemeSwitch
        index={index}
        setTheme={setTheme}
        styles={styles} />
    </header>
  );
};

export default Header;