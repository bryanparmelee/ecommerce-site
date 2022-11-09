import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ category, products }) => {
    return (
        <div className="flex flex-col w-full px-4 mb-12 pb-4">
            <div className="flex justify-center sm:justify-between p-2">
                <h2 className="text-2xl font-bold mb-2">
                    <Link to={`${category}`} >
                        <span className="cursor-pointer text-gray-600">{category.toUpperCase()}</span>
                    </Link>                
                </h2>
                <Link to={`${category}`}><span className="hidden sm:block cursor-pointer text-sm text-gray-600">See all</span></Link>
            </div>
   
            <div className="flex flex-wrap justify-center gap-8">
                {
                    products
                        .filter((_, idx) => idx < 2)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} category={category} />
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;