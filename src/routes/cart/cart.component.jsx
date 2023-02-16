import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import CartItem from "../../components/cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const goToShop = () => navigate("../shop");
  const goToCheckout = () => navigate("/checkout");

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4">
      <h1 className="p-3 text-center text-3xl font-bold sm:text-5xl">
        Your Cart
      </h1>
      <div className="max-w-[600px] p-2">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div className="flex w-full flex-col items-center gap-4">
            <span className="text-md">Your cart is currently empty</span>
            <Button onClick={goToShop}>Start shopping</Button>
          </div>
        )}
      </div>
      {cartItems.length ? (
        <>
          <div className="py-8 text-right text-xl font-bold sm:text-3xl">
            {cartTotal > 0 && `Total: $${cartTotal.toFixed(2)}`}
          </div>
          <Button onClick={goToCheckout}> Go to Checkout</Button>
        </>
      ) : null}
    </div>
  );
};

export default Cart;
