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
                <ProductCard
                        key={product.id}
                        product={product}                                           
                />    
            ))}
        </div>
        <Outlet />
        </>
    )
}

export default Shop;