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

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal.toFixed(2) * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setPaymentSuccess(true);
      }
    }
  };

  return (
    <>
      {paymentSuccess && (
        <OrderConfirmation closePaymentSuccess={closePaymentSuccess} />
      )}
      <div className="flex min-h-[500px] w-full flex-wrap items-center justify-evenly">
        <div className="flex w-80 flex-col justify-evenly gap-4 p-2">
          <h1 className="mb-2 text-xl font-bold sm:text-3xl">Order Summary</h1>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-t border-black/50 pt-2"
            >
              <span className="mb-2 w-3/4 text-xs">{item.title}</span>
              <span className="text-xs font-bold">{item.price}</span>
            </div>
          ))}

          <div className="text-md mt-4 flex justify-between font-bold">
            <span>TOTAL</span>
            <span>{`$${cartTotal.toFixed(2)}`}</span>
          </div>
        </div>

        <form className="flex w-80 flex-col gap-4" onSubmit={paymentHandler}>
          <h2 className="mb-1 text-xl font-bold sm:text-3xl">Pay with card</h2>
          <CardElement className="mb-4 w-full border p-1" />
          <Button isLoading={isProcessingPayment}>Pay Now</Button>
        </form>
      </div>
      <span className="px-2 text-center text-sm font-bold text-red-500">
        Note: Use card number '4242 4242 4242 4242' to make a test transaction.
      </span>
    </>
  );
};

export default PaymentForm;
