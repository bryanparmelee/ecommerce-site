import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const { title, quantity } = cartItem;
    return (
        <div>
            <h2>{title}</h2>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;