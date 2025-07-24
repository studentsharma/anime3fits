import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../features/user/userSlice"
import productReducers from "../features/product/productSlice"

// export const store = configureStore({
//     reducer : userReducers
// });

export const store = configureStore({
  reducer: {
    user: userReducers,
    product : productReducers
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

