import { Routes, Route } from "react-router-dom";

import CategoryPage from "../category-page/category-page.component";

import ProductPage from "../product-page/product-page.component";

const Category = () => {
  return (
    <Routes>
        <Route index element={<CategoryPage /> } />
        <Route path=':productId' element={<ProductPage /> } />
    </Routes>
  )
}

export default Category;