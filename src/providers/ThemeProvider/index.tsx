import React, { createContext, FC } from 'react';
import useLocalStorage from '@rehooks/local-storage';

import { IThemeProvider, IThemeContext } from './interfaces';

// theme context
const ThemeContext: any = createContext({} as IThemeContext);

// theme provider
const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [ theme, setTheme ] = useLocalStorage('theme', null);

  // render
  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
export default ThemeProvider;