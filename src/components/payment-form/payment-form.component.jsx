import { Fragment } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import Button from "../button/button.component";
import OrderConfirmation from "../order-confirmation/order-confirmation.component";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { cartTotal, cartItems } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const closePaymentSuccess = () => setPaymentSuccess(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return; 
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: cartTotal.toFixed(2) * 100 })
        }).then((res) => {
            return res.json()
        });

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                setPaymentSuccess(true);
            }
        }
    };

    return (
        <>
            {paymentSuccess && <OrderConfirmation closePaymentSuccess={closePaymentSuccess} />}
            <div className="w-full h-80 flex flex-wrap items-center justify-evenly">

                <div className="w-80 flex flex-col justify-evenly p-2">
                    <h1 className="text-lg font-bold mb-2 border-b border-black/50">ORDER SUMMARY</h1>
                
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between">
                            <span className="w-3/4 text-xs mb-2">{item.title}</span>
                            <span className="text-xs font-bold">{item.price}</span>
                        </div>
                    ))}
        
                    <div className="mt-4 text-md font-bold flex justify-between border-b border-black/50 sm:border-none">
                    <span>TOTAL</span>
                    <span>{`$${cartTotal.toFixed(2)}`}</span>
                    </div>
                </div> 

                
                <form className="w-80 p-2" onSubmit={paymentHandler}>
                    <h2 className="text-sm font-bold mb-1">PAY WITH CARD</h2>
                    <CardElement 
                        className="mb-4"
                    />
                    <Button
                        isLoading={isProcessingPayment}
                    >
                        Pay Now
                    </Button>
                </form>
            </div>
        </>
    )
}


export default PaymentForm; 