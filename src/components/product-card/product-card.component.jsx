import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ product, category }) => {
    const { title, price, image, id } = product;
    const { addItemToCart } = useContext(CartContext);
    const navigate = useNavigate();
    const gotoProductHandler = () => 
        navigate(`/shop/${category}/${id}`);

    // const addProductToCart = () => addItemToCart(product);

    return (
        <div 
            className="w-72 h-64 hover:scale-105 shadow-md hover:shadow-lg duration-500 ease-out flex flex-col justify-between bg-white rounded-lg"
            onClick={gotoProductHandler}    
        >
            <img 
                className="w-full h-44 p-1 object-contain inner-shadow rounded-t-lg"
                src={image}
                alt={`${title}`}
            />
            <div className='w-full h-24 p-3 flex justify-between items-center bg-zinc-100 rounded-b-lg'>
                <span className='w-3/4 text-md sm:text-sm font-light'>{title}</span>
                <span className='text-md sm:text-sm font-bold text-red-600'>{`$${price}`}</span>
            </div>
            {/* <Button onClick={addProductToCart}>Add to Cart</Button> */}
        </div>
    );
};

export default ProductCard;