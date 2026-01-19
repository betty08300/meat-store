import { Stack } from "@mui/material";
import type { Product } from "@/types/product";
import ProductListGroup from "@/components/ProductListGroup";

type Props = {
  groups: Record<string, Product[]>;
  groupBy: string;
};

const ProductList = ({ groups, groupBy }: Props) => {
  return (
    <Stack>
      {Object.entries(groups).map(([groupKey, products]) => (
        <ProductListGroup
          key={groupKey}
          groupKey={groupKey}
          products={products}
          groupBy={groupBy}
        />
      ))}
    </Stack>
  );
};

export default ProductList;
