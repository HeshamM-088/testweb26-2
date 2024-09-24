import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { myNum } from "./slices/homeSlice";
import { allUsers } from "./slices/usersSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { userAuth } from "./slices/userLoginSlice";

const reduxPresist = {
  key: "root",
  storage,
  whitelist: ["userAuth"],
};

const mainReducers = combineReducers({
  allUsers,
  myNum,
  userAuth,
});

const mainReducer = persistReducer(reduxPresist, mainReducers);

const store = configureStore({
  reducer: mainReducer,
});

export const persistor = persistStore(store);

export default store;
