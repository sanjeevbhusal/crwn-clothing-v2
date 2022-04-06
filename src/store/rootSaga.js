import { call, all } from "redux-saga/effects";

import { categoriesSaga } from "./categories/categoriesSaga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
