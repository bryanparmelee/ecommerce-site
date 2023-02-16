import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ cartItem }) => {
  const { title, image, price, quantity, id } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="relative flex min-h-[120px] w-full items-center gap-2 border-b border-gray-600/50 px-2">
      <img
        className="w-20 object-contain p-2 sm:w-32"
        src={image}
        alt={`${title}`}
      />

      <span className="ml-4 w-1/3 p-1 text-xs font-light">{title}</span>

      <div className="flex w-1/3 flex-col items-end p-1 text-sm font-bold sm:text-lg">
        <span className="text-red-500">{`$${price.toFixed(2)}`}</span>
        <span className="flex p-0.5">
          <div className="" onClick={removeItemHandler}>
            &#10094;
          </div>
          <div className="mx-3">{quantity}</div>
          <div className="" onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
      </div>
      <span
        className="absolute top-0 right-1 cursor-pointer text-center text-xl font-bold"
        onClick={clearItemHandler}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CartItem;
