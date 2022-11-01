import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";



const ProductPage = () => {
    const { productId } = useParams();
    const { products } = useContext(ProductsContext);
    const { addItemToCart } = useContext(CartContext);

    const selectedProduct = products.filter((item) => (item.id == productId));
    const [product] = selectedProduct;

    const { title, description, image, price } = product;


    const addProductToCart = () => addItemToCart(product);

    return (
        <>
            <div>
                <h2>{productId}</h2>
                <h2>{title}</h2>
                <img src={image} alt={`${title}`} />
                <h3>{price}</h3>
                <span>{description}</span>
                <Button onClick={addProductToCart}>Add to cart</Button>
            </div>
        </>
    )
}

export default ProductPage;