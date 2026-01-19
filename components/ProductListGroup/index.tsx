import { Stack, Typography } from "@mui/material";
import type { Product } from "@/types/product";
import ProductListItem from "@/components/ProductListItem";

type Props = {
  groupKey: string;
  products: Product[];
  groupBy: string;
};

const ProductListGroup = ({ groupKey, products, groupBy }: Props) => {
  let groupName = groupBy;

  if (groupBy === "CAT_ID") {
    groupName = "CATEGORY ID";
  }

  return (
    <Stack spacing={2} flexWrap="wrap">
      {groupKey !== "ALL" && (
        <>
          <Typography variant="h6">
            {groupName}: {groupKey}
          </Typography>
        </>
      )}
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Stack>
  );
};

export default ProductListGroup;
