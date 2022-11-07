import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ category, products }) => {
    return (
        <div className="flex flex-col mb-12">
            <h2 className="text-2xl font-bold">
                <Link to={`${category}`} >
                    <span className="cursor-pointer">{category.toUpperCase()}</span>
                </Link>
            </h2>
   
            <div className="flex gap-8">
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;