import { ReactNode } from "react";

export interface IFiltersContext {
  filters: any;
  setFilters(value: any): any;
}

export interface IFilterProvider {
  children: ReactNode;
}