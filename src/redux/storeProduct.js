import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice.js";
import storage from "redux-persist/es/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "products",
    storage,
};

const persistedReducer = persistReducer(persistConfig, productReducer);

export const storeProduct = configureStore({
    reducer: {
        products: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(storeProduct);