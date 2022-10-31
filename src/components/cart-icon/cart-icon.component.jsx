import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import { useContext } from 'react'; 
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);  

    const navigate = useNavigate();
    const gotoCheckoutHandler = () => 
        navigate('checkout');
        
    return (
        <div className='cart-icon-container' onClick={gotoCheckoutHandler}>
            <ShoppingCartIcon className='cart-icon'/>
            <span className='cart-count'>{cartCount}</span>
        </div>
    )
 }
 export default CartIcon;
