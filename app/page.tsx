"use client";

import { Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";

import ProductGroupBy from "@/components/ProductGroupBy";
import ProductSortBy from "@/components/ProductSortBy";
import { ProductGroup, ProductSort } from "@/types/product";
import ProductList from "@/components/ProductList";
import { useAppSelector } from "@/store/hooks";
import { makeSelectGroupedAndSortedProducts } from "@/store/products/customSelectors";

const Home = () => {
  const [sort, setSort] = useState<ProductSort>("NONE");
  const [groupBy, setGroupBy] = useState<ProductGroup>("NONE");

  const selector = useMemo(
    () => makeSelectGroupedAndSortedProducts(sort, groupBy),
    [sort, groupBy],
  );

  const groups = useAppSelector(selector);

  return (
    <Stack>
      <Typography variant="h4">Meat Store Lists</Typography>
      <Stack>
        <ProductGroupBy value={groupBy} onChange={setGroupBy} />
        <ProductSortBy value={sort} onChange={setSort} />
      </Stack>
      <ProductList groups={groups} groupBy={groupBy} />
    </Stack>
  );
};

export default Home;
