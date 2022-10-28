import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import { useContext } from 'react'; 
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCartIsOpen = () => setIsCartOpen(!isCartOpen);
    
    return (
        <div className='cart-icon-container' onClick={toggleCartIsOpen}>
            <ShoppingCartIcon className='cart-icon'/>
            <span className='cart-count'>{cartCount}</span>
        </div>
    )
 }

 export default CartIcon;