import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { mapProducts } from "@/utils/mapProducts";
import type { Product } from "@/types/product";

const productsAdapter = createEntityAdapter<Product, string>({
  selectId: (product: Product) => product.id,
  sortComparer: false,
});

const initialState = productsAdapter.setAll(
  productsAdapter.getInitialState(),
  mapProducts(),
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: productsAdapter.addOne,
    updateProduct: productsAdapter.updateOne,
    deleteProduct: productsAdapter.removeOne,
    resetProducts: (state) => {
      productsAdapter.setAll(state, mapProducts());
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, resetProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
export { productsAdapter };
