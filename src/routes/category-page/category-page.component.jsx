import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

const CategoryPage = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="mb-8 text-6xl font-bold">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={category}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryPage;
