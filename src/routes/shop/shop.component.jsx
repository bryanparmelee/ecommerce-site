import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
    const { products } = useContext(ProductsContext);
    
    return (
        <>
        <div className="w-full p-5 flex flex-wrap justify-center items-center gap-4 bg-zinc-200">
            {products.map((product) => (
              <Link to={`${product.id}`}>
                <ProductCard
                        key={product.id}
                        product={product}                                            
                    />
              </Link>   
            ))}
        </div>
        <Outlet />
        </>
    )
}

export default Shop;