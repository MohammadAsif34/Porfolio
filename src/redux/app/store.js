import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
// import thunk from "redux-thunk";

// Example reducer (you can replace with your own slices)
import userReducer from "../slice/userSlice.js";

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
