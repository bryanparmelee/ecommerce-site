import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <h1>Your cart</h1>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>        
          
            <div>
                {cartItems.length ?
                    cartItems.map((cartItem) => (                                       
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />                                          
                    )) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <div className='total'>
                {cartTotal > 0 && `Total: ${cartTotal}`}            
            </div>
        </div>
    )
}

export default Checkout;