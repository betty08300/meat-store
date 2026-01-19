"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Container, Typography, Box } from "@mui/material";
import ProductForm from "@/components/ProductForm";
import { addProduct } from "@/store/products/slice";
import type { Product } from "@/types/product";

const AddProduct = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (data: Product) => {
    dispatch(addProduct(data));
    router.push("/");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Add Product
        </Typography>
        <ProductForm submitLabel="Add Product" onSubmit={handleSubmit} />
      </Box>
    </Container>
  );
};

export default AddProduct;
