import { ReactNode } from "react";

export interface ITheme {
  background_color: string;
  name: string;
  text_color: string;  
}

export interface IThemeContext {
  theme: ITheme;
  themes: ITheme[];
  setTheme: (value: any) => void;
}

export interface IThemeProvider {
  table: any;
  children: ReactNode;
}