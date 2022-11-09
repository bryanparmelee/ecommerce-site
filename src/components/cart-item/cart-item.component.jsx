
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({cartItem}) => {
    const { title, image, price, quantity, id} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem); 
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='w-full h-32 px-2 flex items-center border-b border-gray-600/50 relative'>
            <div className='w-1/3'>
                <img 
                    className='w-full max-h-32 object-contain sm:p-2'
                    src={image} 
                    alt={`${title}`} 
                        
                    />
            </div>
          
            <span className='w-1/3 p-1 ml-4 text-xs font-light'>{title}</span>
        
            <div className='w-1/3 p-1 flex flex-col items-end font-bold text-sm sm:text-lg'>
                <span className='text-red-500'>{`$${price.toFixed(2)}`}</span>
                <span className='p-0.5 flex'>
                    <div className='' onClick={removeItemHandler}>
                        &#10094;
                    </div>
                    <div className='mx-3'>
                        {quantity}
                    </div>
                    <div className='' onClick={addItemHandler}>
                        &#10095;
                    </div>
                </span>
               
            </div>    
            <span 
                className='text-xl text-center font-bold absolute top-0 right-1 cursor-pointer'
                onClick={clearItemHandler}
            >&#10005;</span>                
        </div>       
    )
}

export default CartItem;