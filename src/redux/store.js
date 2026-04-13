import { configureStore } from "@reduxjs/toolkit";

import surveyReducer from "./slice/surveySlice.js";

const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});

export default store;
