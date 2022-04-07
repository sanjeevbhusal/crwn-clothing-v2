import { call, all } from "redux-saga/effects";

import { categoriesSaga } from "./categories/categoriesSaga";
import { userSaga } from "./user/userSaga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
