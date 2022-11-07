import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';


const CartSuccess = ({ product, isAddedToCart, setIsAddedToCart }) => {
    const { title, price, image } = product;

    const { cartTotal, cartCount } = useContext(CartContext);

    const closeCartSuccess = () => setIsAddedToCart(!isAddedToCart);

    const navigate = useNavigate();
    const gotoCartHandler = () => navigate('/cart');

    return (
        <div className='w-screen h-screen absolute inset-o bg-black/75 flex justify-center items-center z-[100]' onClick={closeCartSuccess}>
            <div className='w-5/6 sm:w-96 h-80 p-2 bg-white relative flex flex-col justify-between' onClick={(e) => e.stopPropagation()}>
                <h2 className='text-2xl font-bold'>Added to cart!</h2>
             
                <div className='w-full flex border-b border-slate-500'>
                    <img
                        className='w-full max-h-32 sm:h-40 p-4 object-contain' 
                        src={image} 
                        alt={`${title}`} />
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-sm font-light'>{title}</h3>
                        <span className='text-red-500 text-lg font-bold'>{`$${price.toFixed(2)}`}</span>
                    </div>                   
                </div>

                <div className='w-full'>
                    <div className='flex flex-col'>
                        <span className='text-sm font-light'>Total: ({cartCount > 1 ? `${cartCount} items` : `${cartCount} item`})</span>
                        <span className='text-md font-bold'>{`$${cartTotal.toFixed(2)}`}</span>
                        <Button onClick={gotoCartHandler}>VIEW CART</Button>
                    </div>
                </div>

                <span className='font-bold text-2xl absolute top-0 right-1.5 cursor-pointer' onClick={closeCartSuccess}>&#10005;</span>
            </div>
        </div>          
    )
}

export default CartSuccess;