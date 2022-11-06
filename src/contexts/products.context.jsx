
import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
        };

        getCategoriesMap();
    }, []);

    const value = {products};
    return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}