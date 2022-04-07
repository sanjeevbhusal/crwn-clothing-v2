import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesObject,
  selectIsCategoryLoading,
} from "../../store/categories/categoriesSelector";
import Spinner from "../../components/spinner/spinner.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesObject = useSelector(selectCategoriesObject);
  const loading = useSelector(selectIsCategoryLoading);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesObject).map((title) => {
          const products = categoriesObject[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
