import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";
import CartSuccess from "../../components/cart-success/cart-success.component";



const ProductPage = ({ product }) => {
    const { productId } = useParams();
    const { addItemToCart } = useContext(CartContext);

    // const selectedProduct = products.filter((item) => (item.id === Number(productId)));
    // const [product] = selectedProduct;

    const { title, description, image, price } = product;

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const addProductToCart = () => {
        addItemToCart(product);
        setIsAddedToCart(!isAddedToCart);
    }

    return (
        <>
           {isAddedToCart && 
                        <CartSuccess 
                            product={product} 
                            isAddedToCart={isAddedToCart} 
                            setIsAddedToCart={setIsAddedToCart}             
                        />}
            <div className="w-full h-auto md:h-96 p-4 flex flex-col sm:flex-row justify-between items-center relative">
             
                <img
                    className="w-5/6 md:w-1/2 max-h-72 p-6 object-contain " 
                    src={image} 
                    alt={`${title}`} 

                />
                <div className="w-full h-80 sm:h-72 px-3 flex flex-col justify-between">
                    <div >
                    <h2 className="font-black italic text-xl sm:text-2xl">{title}</h2>               
                    <h3 className="font-extrabold text-xl sm:text-2xl text-red-700">{'$' + price}</h3>
                    </div>
                    <span className="text-sm font-light">{description}</span>
                    <div className="mt-3 flex justify-center items-center">
                    <Button onClick={addProductToCart}>Add to cart</Button>
                   
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ProductPage;