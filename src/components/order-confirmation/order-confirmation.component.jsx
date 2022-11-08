import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";


const OrderConfirmation = (closePaymentSuccess) => {
    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate();


    
    const clearOrder = () => {
        clearCart();
        closePaymentSuccess();
        navigate('/shop');

        
    }
    return (
        <div className="w-screen h-screen absolute inset-o bg-black/75 flex justify-center items-center z-[100]">
            <div className="w-5/6 sm:w-96 h-80 p-2 bg-white relative flex flex-col justify-between">
                <h2 className="text-2xl font-bold">Order Confirmed!</h2>
                <Button onClick={clearOrder}>Continue Shopping</Button>
            </div>
        </div>
    )
}

export default OrderConfirmation;