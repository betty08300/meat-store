"use client";

import { useMemo, useState } from "react";
import { Stack, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProductSortBy from "@/components/ProductSortBy";
import ProductGroupBy from "@/components/ProductGroupBy";
import ProductList from "@/components/ProductList";
import { makeSelectGroupedAndSortedProducts } from "@/store/products/customSelectors";
import type { ProductGroup, ProductSort } from "@/types/product";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

const ProductsPage = () => {
  const [sort, setSort] = useState<ProductSort>("NONE");
  const [groupBy, setGroupBy] = useState<ProductGroup>("NONE");

  const selector = useMemo(
    () => makeSelectGroupedAndSortedProducts(sort, groupBy),
    [sort, groupBy],
  );

  const groups = useAppSelector(selector);

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Product Lists</Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ alignItems: { xs: "flex-end", sm: "center" } }}
      >
        <Link href="/add" passHref>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{
              color: "rgba(0, 0, 0, 0.54)",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              px: 2.5,
              py: 1,
              minHeight: 36,
              boxShadow: 2,
              "&:hover": {
                boxShadow: 3,
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "rgba(0, 0, 0, 0.08)",
              },
            }}
          >
            NEW
          </Button>
        </Link>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0, sm: 2 }}
          sx={{
            gap: { xs: 3, sm: 2 },
            alignItems: { xs: "baseline", sm: "center" },
          }}
        >
          <ProductGroupBy value={groupBy} onChange={setGroupBy} />
          <ProductSortBy value={sort} onChange={setSort} />
        </Stack>
      </Stack>
      <ProductList groups={groups} groupBy={groupBy} />
    </Stack>
  );
};

export default ProductsPage;
