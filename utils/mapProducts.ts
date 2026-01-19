import { Product, RawDataProduct } from "@/types/product";
import raw from "@/products.json";

const parseProductSize = (size: string) => {
  if (!size || !size.trim()) return undefined;

  // element 1: (\d+(?:\.\d+)?) - matches the numeric value (integer or decimal)
  // \s* - matches optional whitespace
  // element 2: (\w+) - matches the unit (e.g., g, kg, ml, l)
  const match = size.match(/^(\d+(?:\.\d+)?)\s*(\w+)$/);
  if (!match) return undefined;

  return {
    value: parseFloat(match[1]),
    unit: match[2],
  };
};

const parsePrice = (price: string) => parseFloat(price.replace("$", "").trim());

export const mapProducts = (): Product[] => {
  const products = raw as unknown as RawDataProduct[];
  return products.map(
    ({
      productSize,
      item,
      plu_upc,
      price,
      productId,
      catId,
      uom,
    }: RawDataProduct) => ({
      productSize: parseProductSize(productSize),
      item: item.trim(),
      plu_upc: plu_upc.trim(),
      price: parsePrice(price),
      id: productId.trim(),
      catId: catId.trim(),
      uom: uom.trim(),
    }),
  );
};
