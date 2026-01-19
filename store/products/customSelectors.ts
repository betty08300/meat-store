import { createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "./selectors";
import type { ProductSort, ProductGroup } from "@/types/product";
import { productGroupers } from "@/utils/group";
import { productSorters } from "@/utils/sort";

export const makeSelectGroupedAndSortedProducts = (
  sort: ProductSort,
  groupBy: ProductGroup,
) =>
  createSelector([selectAllProducts], (products) => {
    let sorted: typeof products;
    if (sort === "NONE") {
      sorted = [...products].slice().reverse(); // newest first
    } else {
      sorted = [...products].sort(productSorters[sort]);
    }

    if (groupBy === "NONE") {
      return { ALL: sorted };
    }

    const grouper = productGroupers[groupBy];

    return sorted.reduce<Record<string, typeof products>>((acc, product) => {
      const key = grouper(product);
      acc[key] ??= [];
      acc[key].push(product);
      return acc;
    }, {});
  });
