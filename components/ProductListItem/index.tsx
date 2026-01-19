"use client";

import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import type { Product } from "@/types/product";

type Props = {
  product: Product;
};

const ProductListItem = ({ product }: Props) => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack spacing={0.5} flex={1}>
              <Typography variant="subtitle1" fontWeight={600}>
                {product.item}
              </Typography>

              {product.productSize && (
                <Typography variant="body2" color="text.secondary">
                  {product.productSize.value} {product.productSize.unit}
                </Typography>
              )}

              <Box>
                <Typography variant="h6">
                  ${product.price.toFixed(2)}
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    {" "}
                    / {product.uom}
                  </Typography>
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductListItem;
