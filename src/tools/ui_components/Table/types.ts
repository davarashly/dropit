export interface TableColumn<Item> {
  key: keyof Item | string;
  title: string;
  width?: string | number;
  renderCell: (item: Item) => JSX.Element;
}

export type GetKeyRow<Item> = (item: Item) => string;
