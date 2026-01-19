import type { Product, ProductGroup } from "@/types/product";

export const productGroupers: Record<
  Exclude<ProductGroup, "NONE">,
  (product: Product) => string
> = {
  CAT_ID: (product) => product.catId,
  UOM: (product) => product.uom,
};
