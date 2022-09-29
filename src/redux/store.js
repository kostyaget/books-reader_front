import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth";
import { authApi } from "./auth/authApi";
import { usersApi } from "./users/usersApi";
import { booksApi } from "./books/booksApi";

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["token"],
};

const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    booksApi.middleware,
    usersApi.middleware,
    authApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
