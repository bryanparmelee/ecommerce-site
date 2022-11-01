import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    
    return (
        <>
        <div className="products-container">
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