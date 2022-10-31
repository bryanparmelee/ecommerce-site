import { useParams } from "react-router-dom";


const ProductPage = () => {
    const { productId } = useParams();


    return (
        <div>
            <h2>Product: {productId}</h2>
   
        </div>
    )
}

export default ProductPage;