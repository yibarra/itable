export interface ISelectOption {
  active: boolean;
  onChange(value: string): void;
  item: any;
}