import React, { FC } from 'react';
import ThemeSwitch from '../../components/ThemeSwitch';

const Header: FC<any> = ({ index, styles, setTheme }) => {
  // render
  return (
    <header>
      <ThemeSwitch
        index={index}
        setTheme={setTheme}
        styles={styles} />
    </header>
  );
};

export default Header;