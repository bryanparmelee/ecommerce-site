
import { createContext, useState } from "react";
import { SHOP_DATA } from "../shopData";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(SHOP_DATA);
    const value = {products};
    return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}