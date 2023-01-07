import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import librarySlice from "../features/librarySlice";
// import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    userReducer: persistedReducer,
    librarySlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
