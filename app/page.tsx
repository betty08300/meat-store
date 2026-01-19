import { Stack, Typography } from "@mui/material";
import { useState } from "react";

import ProductGroupBy from "@/components/ProductGroupBy";
import ProductSortBy from "@/components/ProductSortBy";
import { ProductGroup, ProductSort } from "@/types/product";

export default function Home() {
  const [sort, setSort] = useState<ProductSort>("NONE");
  const [groupBy, setGroupBy] = useState<ProductGroup>("NONE");
  return (
    <Stack>
      <Typography variant="h4">Meat Store Lists</Typography>
      <Stack>
        <ProductGroupBy value={groupBy} onChange={setGroupBy} />
        <ProductSortBy value={sort} onChange={setSort} />
      </Stack>
      {/* ProductList */}
    </Stack>
  );
}
