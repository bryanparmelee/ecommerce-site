
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({cartItem}) => {
    const { title, image, price, quantity, id} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const navigate = useNavigate();
    const gotoProductPage = () =>
        navigate(`/shop/${id}`)

    const clearItemHandler = () => clearItemFromCart(cartItem); 
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='w-full h-32 px-2 flex items-center border-b border-slate-500 relative'>
            <div className='w-1/3'>
                <img 
                    className='w-full max-h-32 object-contain p-2'
                    onClick={gotoProductPage}
                    src={image} 
                    alt={`${title}`} 
                        
                    />
            </div>
          
            <span className='w-1/3 p-1 ml-4 text-sm font-medium'>{title}</span>
        
            <div className='w-1/3 p-1 flex flex-col items-end font-light text-sm'>
                <span className='text-xl font-bold text-red-500'>{`$${price.toFixed(2)}`}</span>
                <span className='p-0.5 flex'>
                    <div className='text-lg font-bold' onClick={removeItemHandler}>
                        &#10094;
                    </div>
                    <div className='text-lg font-bold mx-3'>
                        {quantity}
                    </div>
                    <div className='text-lg font-bold' onClick={addItemHandler}>
                        &#10095;
                    </div>
                </span>
               
            </div>    
            <span 
                className='text-2xl font-bold absolute top-0 right-1 cursor-pointer'
                onClick={clearItemHandler}
            >&#10005;</span>                
        </div>       
    )
}

export default CartItem;