import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./categoriesActions";
import CATEGORIES_ACTION_TYPES from "./categoriesActionTypes";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* startFetchingCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(startFetchingCategories)]);
}
