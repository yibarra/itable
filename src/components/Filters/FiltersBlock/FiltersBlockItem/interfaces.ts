export interface IFiltersBlockItemElement {
  color: string;
  id: string;
  name: string;
}

export interface IFiltersBlockItem {
  active: boolean;
  item: IFiltersBlockItemElement;
  setItem(item: any): void;
}