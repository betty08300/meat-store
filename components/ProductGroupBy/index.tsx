"use client";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { ProductGroup } from "@/types/product";

type Props = {
  value: ProductGroup;
  onChange: (value: ProductGroup) => void;
};

const ProductGroupBy = ({ value, onChange }: Props) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      size="small"
      onChange={(_, val) => val && onChange(val)}
      sx={{ minHeight: 40 }}
    >
      <ToggleButton value="NONE">None</ToggleButton>
      <ToggleButton value="CAT_ID">Category ID</ToggleButton>
      <ToggleButton value="UOM">UOM</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ProductGroupBy;
