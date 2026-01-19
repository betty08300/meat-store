import type { Product } from "@/types/product";

export const parseFormData = (data: Product) => ({
  ...data,
  price: data.price.toFixed(2),
  productSizeValue: data.productSize?.value,
  productSizeUnit: data.productSize?.unit,
});
