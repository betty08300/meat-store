"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Typography,
  FormControl,
  Paper,
} from "@mui/material";
import Link from "next/link";
import type { Product } from "@/types/product";
import { generateRandomId } from "@/utils/generateRandomId";

type FormData = {
  value?: number;
  unit?: string;
} & Partial<Product>;

type ProductFormProps = {
  initialData?: FormData;
  onSubmit: (data: Product) => void;
  submitLabel: string;
  loading?: boolean;
  showCancel?: boolean;
  cancelHref?: string;
};

const ProductForm = ({
  initialData = {},
  onSubmit,
  submitLabel,
  loading = false,
  showCancel = true,
  cancelHref = "/",
}: ProductFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [showGeneralError, setShowGeneralError] = useState(false);

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (field === "price" || field === "value") {
        setFormData({
          ...formData,
          [field]: parseFloat(value) || 0,
        });
      } else {
        setFormData({
          ...formData,
          [field]: value,
        });
      }
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { item, price, plu_upc = "", id, catId, uom, value, unit } = formData;
    const missing = !item || !price || !catId || !uom;
    setShowGeneralError(missing);
    if (missing) return;

    const productSize =
      value !== 0 && value !== undefined && unit ? { value, unit } : undefined;

    onSubmit({
      item,
      price,
      plu_upc,
      id: id || generateRandomId(),
      catId,
      uom,
      productSize,
    });
  };

  return (
    <Paper
      sx={{ p: 3, boxShadow: "none", border: "1px solid rgba(0, 0, 0, 0.12)" }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={3}>
          <FormControl fullWidth error={showGeneralError && !formData.item}>
            <TextField
              fullWidth
              label={
                <>
                  Product Name<span style={{ color: "red" }}>*</span>
                </>
              }
              value={formData.item || ""}
              onChange={handleChange("item")}
              variant="outlined"
              error={showGeneralError && !formData.item}
            />
            {showGeneralError && !formData.item && (
              <Typography color="error" variant="caption">
                Required field
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth>
            <TextField
              fullWidth
              label="PLU/UPC"
              value={formData.plu_upc || ""}
              onChange={handleChange("plu_upc")}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth error={showGeneralError && !formData.price}>
            <TextField
              fullWidth
              label={
                <>
                  Price<span style={{ color: "red" }}>*</span>
                </>
              }
              type="number"
              value={formData.price || ""}
              onChange={handleChange("price")}
              variant="outlined"
              error={showGeneralError && !formData.price}
            />
            {showGeneralError && !formData.price && (
              <Typography color="error" variant="caption">
                Required field
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth error={showGeneralError && !formData.uom}>
            <TextField
              fullWidth
              label={
                <>
                  Unit of Measure (UOM)<span style={{ color: "red" }}>*</span>
                </>
              }
              value={formData.uom || ""}
              onChange={handleChange("uom")}
              variant="outlined"
              error={showGeneralError && !formData.uom}
            />
            {showGeneralError && !formData.uom && (
              <Typography color="error" variant="caption">
                Required field
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth error={showGeneralError && !formData.catId}>
            <TextField
              fullWidth
              label={
                <>
                  Category ID<span style={{ color: "red" }}>*</span>
                </>
              }
              value={formData.catId || ""}
              onChange={handleChange("catId")}
              variant="outlined"
              error={showGeneralError && !formData.catId}
            />
            {showGeneralError && !formData.catId && (
              <Typography color="error" variant="caption">
                Required field
              </Typography>
            )}
          </FormControl>
          <Stack direction="row" spacing={2}>
            <FormControl sx={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Product Size (Number)"
                type="number"
                value={formData.value || ""}
                onChange={handleChange("value")}
                variant="outlined"
              />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Product Size (Unit)"
                value={formData.unit || ""}
                onChange={handleChange("unit")}
                variant="outlined"
              />
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ flex: 1 }}
              disabled={loading}
            >
              {submitLabel}
            </Button>
            {showCancel && (
              <Link href={cancelHref} style={{ flex: 1 }}>
                <Button variant="outlined" sx={{ width: "100%" }}>
                  Cancel
                </Button>
              </Link>
            )}
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};

export default ProductForm;
