import { ReactNode } from "react";
export interface IFiltersContext {
  filters: any;
  onSetFilterByKey(type: string, value: any): void;
  setFilters(value: any): any;
}
export interface IFilterProvider {
  children: ReactNode;
}