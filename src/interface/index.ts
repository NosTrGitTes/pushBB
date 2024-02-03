export interface ITableBetItem {
  name: string;
  position: number;
  symbol: string;
  mass: number;
}

export interface ITableBetProps {
  elements: ITableBetItem[]; // Define elements como um array de ITableBetItem
}
