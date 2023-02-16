import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";
import CartSuccess from "../../components/cart-success/cart-success.component";



const ProductPage = () => {
    const { productId } = useParams();

    const location = useLocation();
    const category = location.pathname.split('/')[2];
    const { categoriesMap } = useContext(CategoriesContext);
    const [product, setProduct] = useState({});
    const categoryItems = categoriesMap[category];
    
    useEffect(() => {
        const currProduct = categoryItems ? categoryItems.filter((item) => item.id === Number(productId)) : {};
        setProduct(...currProduct);
    }, [productId, categoryItems]);

    const { addItemToCart } = useContext(CartContext);

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
                        />
            }
            {product &&       
                <div className="w-full min-h-screen p-4 mb-4 flex flex-col sm:flex-row justify-evenly items-center relative">
                
                    <img
                        className="w-72 sm:w-80 md:w-96 p-6 object-contain " 
                        src={image} 
                        alt={`${title}`} 

                    />
                    <div className="w-72 sm:w-80 md:w-96 px-3 flex flex-col gap-8 justify-between">
                        <div >
                        <h2 className="font-black italic text-xl sm:text-2xl">{title}</h2>               
                        <h3 className="font-extrabold text-xl sm:text-2xl text-red-700">{'$' + price}</h3>
                        </div>
                        <span className="text-sm font-light overflow-auto">{description}</span>
                        <div className="mt-3 flex justify-center items-center">
                        <Button onClick={addProductToCart}>Add to cart</Button>
                    
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductPage;