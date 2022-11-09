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
    }, [category, categoriesMap])

    return (
        <div className="flex flex-col items-center py-10 bg-slate-100">
            <h2 className="text-3xl font-bold mb-8 text-gray-600">{category.toUpperCase()}</h2>
            <div className="flex flex-wrap gap-8 justify-center">
                {products && 
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} category={category} />
                ))}
            </div>
        </div>
    )
}

export default CategoryPage;