import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-success.styles.scss';

const CartSuccess = ({ product, isAddedToCart, setIsAddedToCart }) => {
    const { title, price, image } = product;

    const { cartTotal, cartCount } = useContext(CartContext);

    const closeCartSuccess = () => setIsAddedToCart(!isAddedToCart);

    return (
        <div className='cart-success-container' onClick={closeCartSuccess}>
            <div className='success-card' onClick={(e) => e.stopPropagation()}>
                <div className='success-item'>
                    <h2>Successfully added to cart!</h2>
                    <h3>{title}</h3>
                    <span>{`$${price}`}</span>
                    <img src={image} alt={`${title}`} />
                </div>
                <div className='success-cart'>
                    <h3>Your cart</h3>
                    <span>{`${cartCount} items`}</span>
                    <span>{`Total: $${cartTotal}`}</span>
                </div>
                <span className='close-symbol' onClick={closeCartSuccess}>&#10005;</span>
            </div>
        </div>          
    )
}

export default CartSuccess;