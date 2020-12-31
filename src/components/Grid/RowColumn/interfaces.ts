import { ReactNode } from "react";

export interface IRowColumnInfo {
  position: string;
  xy: number[];
}

export interface IRowColumn {
  info: IRowColumnInfo;
  children: ReactNode;
}