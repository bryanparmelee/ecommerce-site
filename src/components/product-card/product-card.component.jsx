import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';

import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ product }) => {
    const { title, price, image, id } = product;
    const { addItemToCart } = useContext(CartContext);


    // const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img 
                src={image}
                alt={`${title}`}
            />
            <div className='footer'>
                <span className='title'>{title}</span>
                <span className='price'>{price}</span>
            </div>
            {/* <Button onClick={addProductToCart}>Add to Cart</Button> */}
        </div>
    );
};

export default ProductCard;