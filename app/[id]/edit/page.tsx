"use client";

import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import { selectProductById } from "@/store/products/selectors";
import type { RootState } from "@/store/types";
import { updateProduct } from "@/store/products/slice";
import type { Product } from "@/types/product";
import ProductForm from "@/components/ProductForm";
import { parseFormData } from "@/utils/parseFormData";

export default function EditProduct() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const productId = params.id as string;

  const product = useSelector((state: RootState) =>
    selectProductById(state, productId),
  );

  if (!product) {
    return (
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h6" color="error">
          Product not found
        </Typography>
        <Link href="/">
          <Box mt={2}>
            <Typography component="span">Back to Products</Typography>
          </Box>
        </Link>
      </Container>
    );
  }

  const handleSubmit = (data: Partial<Product>) => {
    if (data.id) {
      dispatch(updateProduct({ id: data.id, changes: data }));
      router.push("/");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Edit Product
        </Typography>
        <ProductForm
          initialData={parseFormData(product)}
          onSubmit={handleSubmit}
          submitLabel="Save Changes"
          showCancel={true}
          cancelHref="/"
        />
      </Box>
    </Container>
  );
}
