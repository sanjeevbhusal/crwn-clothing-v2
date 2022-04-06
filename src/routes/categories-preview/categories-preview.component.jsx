import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesObject } from "../../store/categories/categoriesSelector";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesObject = useSelector(selectCategoriesObject);

  return (
    <Fragment>
      {Object.keys(categoriesObject).map((title) => {
        const products = categoriesObject[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
