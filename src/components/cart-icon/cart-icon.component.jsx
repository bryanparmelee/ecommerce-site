import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import { useContext } from 'react'; 
import { CartContext } from '../../contexts/cart.context';

import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);  

    const navigate = useNavigate();
    const gotoCheckoutHandler = () => 
        navigate('cart');
        
    return (
        <div className='w-6 h-full relative flex items-center justify-center cursor-pointer bg-red-400' onClick={gotoCheckoutHandler}>
            <ShoppingCartIcon className='w-6 h-6'/>
            <span className='absolute text-xs font-bold bottom-0.5'>{cartCount}</span>
        </div>
    )
 }
 export default CartIcon;
