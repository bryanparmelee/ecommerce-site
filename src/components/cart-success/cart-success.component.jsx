import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

const CartSuccess = ({ product, isAddedToCart, setIsAddedToCart }) => {
  const { title, price, image } = product;

  const { cartTotal, cartCount } = useContext(CartContext);

  const closeCartSuccess = () => setIsAddedToCart(!isAddedToCart);

  const navigate = useNavigate();
  const gotoCartHandler = () => navigate("/cart");

  return (
    <div
      className="inset-o absolute z-[100] flex h-full w-screen items-center justify-center bg-black/75"
      onClick={closeCartSuccess}
    >
      <div
        className="relative flex h-80 w-5/6 flex-col items-center justify-evenly bg-white p-4 sm:w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold">Added to cart!</h2>

        <div className="flex w-full border-b border-slate-500">
          <img
            className="max-h-32 w-full object-contain p-4 sm:h-40"
            src={image}
            alt={`${title}`}
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-light">{title}</h3>
            <span className="text-lg font-bold text-red-500">{`$${price.toFixed(
              2
            )}`}</span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-right text-sm font-light">
              Total: (
              {cartCount > 1 ? `${cartCount} items` : `${cartCount} item`})
            </span>
            <span className=" text-md text-right font-bold">{`$${cartTotal.toFixed(
              2
            )}`}</span>
          </div>
          <Button onClick={gotoCartHandler}>VIEW CART</Button>
        </div>

        <span
          className="absolute top-0 right-1.5 cursor-pointer text-2xl font-bold"
          onClick={closeCartSuccess}
        >
          &#10005;
        </span>
      </div>
    </div>
  );
};

export default CartSuccess;
