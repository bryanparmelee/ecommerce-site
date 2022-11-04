import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";
import CartSuccess from "../../components/cart-success/cart-success.component";



const ProductPage = () => {
    const { productId } = useParams();
    const { products } = useContext(ProductsContext);
    const { addItemToCart } = useContext(CartContext);

    const selectedProduct = products.filter((item) => (item.id === Number(productId)));
    const [product] = selectedProduct;

    const { title, description, image, price, rating } = product;
    const rate = rating;

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const addProductToCart = () => {
        addItemToCart(product);
        setIsAddedToCart(!isAddedToCart);
    }

    return (
        <>
            <div className="w-full h-96 bg-orange-500 flex justify-between items-center">
                <img
                    className="w-1/2 p-10" 
                    src={image} 
                    alt={`${title}`} 

                />
                <div className="w-1/2 p-10 flex flex-col justify-between">
                    <h2 className="font-black text-3xl">{title}</h2>               
                    <h3 className="font-bold text-lg text-red-700">{'$' + price}</h3>
                    <span className="font-light">{description}</span>
                    <Button onClick={addProductToCart}>Add to cart</Button>
                    {isAddedToCart && 
                        <CartSuccess 
                            product={product} 
                            isAddedToCart={isAddedToCart} 
                            setIsAddedToCart={setIsAddedToCart}             
                            />}
                </div>
            </div>
            
        </>
    )
}

export default ProductPage;