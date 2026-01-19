import { Product } from "@/types/product";

export const parseFormData = (data: Product) => ({
  ...data,
  value: data.productSize?.value,
  unit: data.productSize?.unit,
});
