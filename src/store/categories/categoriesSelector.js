import { createSelector } from "reselect";

const selectCategoiesReducer = (state) => state.categories;

export const selectCategoriesArray = createSelector(
  [selectCategoiesReducer],
  (categories) => categories.categoriesArray
);

export const selectCategoriesObject = createSelector(
  [selectCategoriesArray],
  (categoriesArray) =>
    categoriesArray.reduce((acc, individualCategory) => {
      const { title, items } = individualCategory;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsCategoryLoading = createSelector(
  [selectCategoiesReducer],
  (categories) => categories.isLoading
);
