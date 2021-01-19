import { ReactNode } from "react";
export interface IFiltersContext {
  filters: any;
  onSetFilterValue(type: string, value: any): void;
  onSetFilterByKey(type: string, value: any): void;
  setFilters(value: any): any;
}
export interface IFilterProvider {
  children: ReactNode;
}