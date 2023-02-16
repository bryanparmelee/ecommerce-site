import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ category, products }) => {
    return (
        <div className="flex flex-col items-center w-full px-4 mb-12 pb-4">
            <div className="flex flex-col justify-center items-center p-2">
                <h2 className="text-4xl font-bold mb-2">
                    <Link to={`${category}`} >
                        <span className="cursor-pointer">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    </Link>                
                </h2>
                <Link to={`${category}`}><span className="cursor-pointer text-lg text-zinc-600 hover:text-black">See all &#8250; </span></Link>
             
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