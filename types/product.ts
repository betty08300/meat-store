export type RawDataProduct = {
  productSize: string;
  item: string;
  plu_upc: string;
  price: string;
  productId: string;
  catId: string;
  uom: string;
};

type ProductSize = {
  value: number;
  unit: string;
};

export type Product = {
  productSize?: ProductSize;
  item: string;
  plu_upc?: string;
  price: number;
  id: string;
  catId: string;
  uom: string;
};
