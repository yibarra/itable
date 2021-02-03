
import { ReactNode } from "react";

export interface ITableBondingType {
  atomic: boolean;
  colvalent_network: boolean;
  diatomic: boolean;
  metallic: boolean;
}

export interface ITableGroupBlock {
  color: string;
  id: string;
  name: string;
}

export interface ITableStandardStateItem {
  name: string;
}

export interface ITableItem {
  bondingType: ITableBondingType;
  elements: any;
  groupBlock: ITableGroupBlock[];
  standardState: ITableStandardStateItem[];
  themes: any;
}

export interface ITableContext {
  element: any;
  setElement(atomicNumber: any): void;
  table: ITableItem;
  getColorGroup(group: any): string;
  setTable(table: ITableItem): void;
}

export interface ITableProvider {
  children?: ReactNode;
}