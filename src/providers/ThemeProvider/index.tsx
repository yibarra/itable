import React, { createContext, FC } from 'react';
import useLocalStorage from '@rehooks/local-storage';

import { IThemeProvider, IThemeContext } from './interfaces';
  
// theme context
const ThemeContext: any = createContext({} as IThemeContext);

// theme provider
const ThemeProvider: FC<IThemeProvider> = ({ children, table }) => {
  // theme
  const [ theme, setTheme ] = useLocalStorage('theme_index', 0);

  // render
  return (
    <ThemeContext.Provider value={{
      themes: table?.themes,
      theme: table?.themes[theme],
      index: theme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
export default ThemeProvider;