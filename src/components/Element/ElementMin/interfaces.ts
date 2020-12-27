import { ITheme } from "../../../providers/ThemeProvider/interfaces";

export interface IElementMin {
  atomicNumber?: number;
  cpkHexColor?: string;
  index: number;
  name?: string;
  symbol?: string;
  empty?: boolean;
  theme: ITheme;
}