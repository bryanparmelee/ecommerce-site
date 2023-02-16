import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";
import CartSuccess from "../../components/cart-success/cart-success.component";

const ProductPage = () => {
  const { productId } = useParams();

  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const { categoriesMap } = useContext(CategoriesContext);
  const [product, setProduct] = useState({});
  const categoryItems = categoriesMap[category];

  useEffect(() => {
    const currProduct = categoryItems
      ? categoryItems.filter((item) => item.id === Number(productId))
      : {};
    setProduct(...currProduct);
  }, [productId, categoryItems]);

  const { addItemToCart } = useContext(CartContext);

  const { title, description, image, price } = product;

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addProductToCart = () => {
    addItemToCart(product);
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <>
      {isAddedToCart && (
        <CartSuccess
          product={product}
          isAddedToCart={isAddedToCart}
          setIsAddedToCart={setIsAddedToCart}
        />
      )}
      {product && (
        <div className="relative mb-4 flex min-h-screen w-full flex-col items-center justify-evenly p-4 sm:flex-row">
          <img
            className="w-72 object-contain p-6 sm:w-80 md:w-96 "
            src={image}
            alt={`${title}`}
          />
          <div className="flex w-72 flex-col justify-between gap-8 px-3 sm:w-80 md:w-96">
            <div>
              <h2 className="text-xl font-black italic sm:text-2xl">{title}</h2>
              <h3 className="text-xl font-extrabold text-red-700 sm:text-2xl">
                {"$" + price}
              </h3>
            </div>
            <span className="overflow-auto text-sm font-light">
              {description}
            </span>
            <div className="mt-3 flex items-center justify-center">
              <Button onClick={addProductToCart}>Add to cart</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
