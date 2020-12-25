import { ITheme } from "../../../../providers/ThemeProvider/interfaces";

export interface ISelectOption {
  active: boolean;
  onChange: (value: string) => void;
  item: any;
  theme: ITheme;
}