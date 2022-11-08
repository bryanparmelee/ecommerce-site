import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

import Button from '../../components/button/button.component';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import CartItem from '../../components/cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const navigate = useNavigate();
    const goToShop = () => navigate('../shop');
    const goToCheckout = () => navigate('/checkout')

    return (
        <div className='w-96 sm:w-[600px] h-5/6 flex flex-col items-center mt-10 mx-auto'>
            <h1 className='w-full text-3xl p-3 mb-10 font-bold'>YOUR CART</h1>            
            <div className='w-full p-2'>
                {cartItems.length ?
                    cartItems.map((cartItem) => (                                       
                        <CartItem key={cartItem.id} cartItem={cartItem} />                                          
                    )) : (
                    <div className='w-full h-24 flex flex-col justify-between'>
                        <span className='text-md'>Your cart is empty</span>
                        <Button onClick={goToShop}>Start shopping</Button>
                    </div>
                )}
            </div>
            <div className='w-full p-4 text-3xl font-bold text-right'>
                {cartTotal > 0 && `Total: $${cartTotal.toFixed(2)}`}            
            </div>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.blue}
                onClick={goToCheckout}
            >
                Go to Checkout
            </Button>
        </div>
    )
}

export default Cart;