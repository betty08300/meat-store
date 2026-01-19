"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { PRODUCT_SORT_OPTIONS } from "./constants";
import type { ProductSort } from "@/types/product";

type Props = {
  value: ProductSort;
  onChange: (sort: ProductSort) => void;
};

const ProductSortBy = ({ value, onChange }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as ProductSort);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 200 }}>
      <InputLabel id="product-sort-label">Sort By</InputLabel>
      <Select
        labelId="product-sort-label"
        value={value}
        label="Sort By"
        onChange={handleChange}
      >
        {PRODUCT_SORT_OPTIONS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProductSortBy;
