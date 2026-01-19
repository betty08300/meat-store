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

export type ProductSort =
  | "NONE"
  | "NAME_ASC"
  | "NAME_DESC"
  | "PRICE_ASC"
  | "PRICE_DESC"
  | "SIZE_ASC"
  | "SIZE_DESC";

export type ProductGroup = "NONE" | "CAT_ID" | "UOM";
