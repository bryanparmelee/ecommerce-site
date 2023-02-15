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
        <div className='w-6 h-full relative flex items-center justify-center cursor-pointer' onClick={gotoCheckoutHandler}>
            <ShoppingCartIcon className='w-10 h-10' color='white' />
            <span className='absolute text-xs font-bold bottom-2'>{cartCount}</span>
        </div>
    )
 }
 export default CartIcon;
