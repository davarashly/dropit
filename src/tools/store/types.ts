import { CatalogProduct } from "../../modules/product/types";

export type CartState = {
  cart: Record<string, { product: CatalogProduct; quantity: number }>;
};
