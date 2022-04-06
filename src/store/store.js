import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./rootReducer";

import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
  sagaMiddleware,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
