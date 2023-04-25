import { CatalogProduct } from "../../modules/product/types";

export type CartState = {
  cart: Record<string, { product: CatalogProduct; quantity: number }>;
};

export type CatalogState = {
  products: CatalogProduct[];
};

export type RootState = {
  cart: CartState;
  products: CatalogState;
};
