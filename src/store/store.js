import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./allReducer/AuthReducer";
import ChatReducer from "./allReducer/ChatReducer";
import MessageReducer from "./allReducer/messageReducer";
import UserReducer from "./allReducer/userReducer";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  user: UserReducer,
  chat: ChatReducer,
  auth: AuthReducer,
  message: MessageReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
