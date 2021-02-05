export interface IHeader {
  element?: any;
  color: string;
  onToggle(): void;
  setElement(element: any): void;
}