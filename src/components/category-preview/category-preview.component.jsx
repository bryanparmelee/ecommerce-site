import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ category, products }) => {
    return (
        <div className="mb-12 pb-4">
            <div className="flex justify-between p-2">
                <h2 className="text-2xl font-bold mb-2">
                    <Link to={`${category}`} >
                        <span className="cursor-pointer">{category.toUpperCase()}</span>
                    </Link>                
                </h2>
                <Link to={`${category}`}><span className="cursor-pointer">See all</span></Link>
            </div>
   
            <div className="flex flex-wrap justify-center gap-8">
                {
                    products
                        .filter((_, idx) => idx < 3)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} category={category} />
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;