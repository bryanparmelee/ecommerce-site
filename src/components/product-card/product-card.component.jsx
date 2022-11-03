import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ product }) => {
    const { title, price, image, id } = product;
    const { addItemToCart } = useContext(CartContext);


    // const addProductToCart = () => addItemToCart(product);

    return (
        <div className="w-72 h-72 flex flex-col justify-between rounded-lg">
            <img 
                class="w-full h-48 object-cover"
                src={image}
                alt={`${title}`}
            />
            <div className='w-full h-24 px-3 flex flex-col justify-center bg-white'>
                <span className='font-bold'>{title}</span>
                <span className='font-light'>{price}</span>
            </div>
            {/* <Button onClick={addProductToCart}>Add to Cart</Button> */}
        </div>
    );
};

export default ProductCard;