import { Product } from "@/types/product";

export const parseFormData = (data: Product) => ({
  ...data,
  price: data.price.toFixed(2),
  value: data.productSize?.value,
  unit: data.productSize?.unit,
});
