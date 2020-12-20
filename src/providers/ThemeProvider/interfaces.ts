import { ReactNode } from "react";

export interface ITheme {
  background_color: string;
  name: string;
  text_color: string;  
}

export interface IThemeContext {
  theme: ITheme;
}

export interface IThemeProvider {
  children: ReactNode;
}