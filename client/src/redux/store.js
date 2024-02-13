import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware"
import userReducer from "./user/userslice";
import persistReducer from "redux-persist/es/persistReducer";
// import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({user:userReducer})

const persistConfig = {

  key:"root",
  storage:storage,
  version:1,

};
const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

