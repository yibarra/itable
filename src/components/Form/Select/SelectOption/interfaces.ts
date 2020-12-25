import { ITheme } from "../../../../providers/ThemeProvider/interfaces";

export interface ISelectOption {
  onChange: (value: string) => void;
  item: any;
  theme: ITheme;
}