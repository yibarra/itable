import React, { createContext, FC, useCallback, useEffect } from 'react';
import useLocalStorage from '@rehooks/local-storage';

import { IThemeProvider, IThemeContext } from './interfaces';
  
// theme context
const ThemeContext: any = createContext({} as IThemeContext);

// theme provider
const ThemeProvider: FC<IThemeProvider> = ({ children, table }) => {
  // theme
  const [ theme, setTheme ] = useLocalStorage('theme', null);

  // on change
  const onChange = useCallback((selectTheme: any) => {
    if (selectTheme instanceof Object) {
      setTheme(selectTheme);
    }
  }, [ setTheme ]);

  // use effect
  useEffect(() => {
    if (table instanceof Object && !theme) {
      setTheme(table?.themes[0]);
    }
  }, [ table, setTheme, theme ]);

  // render
  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme: onChange,
      themes: table?.themes,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
export default ThemeProvider;