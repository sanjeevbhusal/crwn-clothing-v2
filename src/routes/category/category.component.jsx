import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesObject } from "../../store/categories/categoriesSelector";
import { selectIsCategoryLoading } from "../../store/categories/categoriesSelector";

import Spinner from "../../components/spinner/spinner.component";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesObject = useSelector(selectCategoriesObject);
  const isLoading = useSelector(selectIsCategoryLoading);
  const [products, setProducts] = useState(categoriesObject[category]);

  useEffect(() => {
    setProducts(categoriesObject[category]);
  }, [category, categoriesObject]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
