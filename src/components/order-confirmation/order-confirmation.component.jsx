import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

const OrderConfirmation = () => {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const clearOrder = () => {
    clearCart();
    navigate("/shop");
  };

  return (
    <div className="inset-o absolute z-[100] flex h-screen w-screen items-center justify-center bg-black/75">
      <div className="relative flex h-80 w-5/6 flex-col items-center justify-between bg-white p-2 sm:w-96">
        <h2 className="text-2xl font-bold">Order Confirmed!</h2>
        <Button onClick={clearOrder}>Continue Shopping</Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
