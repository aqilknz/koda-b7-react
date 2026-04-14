import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulasi API delay
const delay = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 3000));

/* ================== ASYNC THUNK ================== */

// ADD
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const response = await delay(product);
    return response;
  }
);

// UPDATE
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    const response = await delay(product);
    return response;
  }
);

// DELETE
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await delay(id);
    return id;
  }
);

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ADD
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // UPDATE
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.list.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // DELETE
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.filter(
          (p) => p.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;