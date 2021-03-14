export interface ISearchInput {
  active: boolean;
  onSearchTerm(value: string): void;
  value: string;
}