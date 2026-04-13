import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addProductSuccess: (state, action) => {
      state.list.push(action.payload);
    },
    updateProductSuccess: (state, action) => {
      const index = state.list.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteProductSuccess: (state, action) => {
      state.list = state.list.filter(p => p.id !== action.payload);
    },
  },
});

export const {
  setLoading,
  addProductSuccess,
  updateProductSuccess,
  deleteProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;

export const addProduct = (product) => (dispatch) => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(addProductSuccess(product));
    dispatch(setLoading(false));
  }, 3000);
};

export const updateProduct = (product) => (dispatch) => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(updateProductSuccess(product));
    dispatch(setLoading(false));
  }, 3000);
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(deleteProductSuccess(id));
    dispatch(setLoading(false));
  }, 3000);
};