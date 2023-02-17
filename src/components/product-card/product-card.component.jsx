import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Spinner from "../spinner/spinner.component";
import Button from "../button/button.component";

const ProductCard = ({ product, category }) => {
  const { title, price, image, id } = product;
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const gotoProductHandler = () => navigate(`/shop/${category}/${id}`);

  // const addProductToCart = () => addItemToCart(product);

  return (
    <div
      className="flex h-64 w-72 flex-col justify-between rounded-lg bg-white shadow-md duration-500 ease-out hover:scale-105 hover:shadow-lg"
      onClick={gotoProductHandler}
    >
      {image ? (
        <img
          className="inner-shadow h-44 w-full rounded-t-lg object-contain p-1"
          src={image}
          alt={`${title}`}
        />
      ) : (
        <Spinner />
      )}

      <div className="flex h-24 w-full items-center justify-between rounded-b-lg bg-zinc-100 p-3">
        <span className="text-md w-3/4 font-light sm:text-sm">{title}</span>
        <span className="text-md font-bold text-red-600 sm:text-sm">{`$${price}`}</span>
      </div>
      {/* <Button onClick={addProductToCart}>Add to Cart</Button> */}
    </div>
  );
};

export default ProductCard;
