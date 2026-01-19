import type { Product, ProductSort } from "@/types/product";

export const productSorters: Record<
  ProductSort,
  (a: Product, b: Product) => number
> = {
  NONE: () => 0,
  NAME_ASC: (a, b) => a.item.localeCompare(b.item),
  NAME_DESC: (a, b) => b.item.localeCompare(a.item),
  PRICE_ASC: (a, b) => a.price - b.price,
  PRICE_DESC: (a, b) => b.price - a.price,
  SIZE_ASC: (a, b) => (a.productSize?.value ?? 0) - (b.productSize?.value ?? 0),
  SIZE_DESC: (a, b) =>
    (b.productSize?.value ?? 0) - (a.productSize?.value ?? 0),
};
