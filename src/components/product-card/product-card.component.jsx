import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { title, price, image } = product
    return (
        <div className='product-card-container'>
            <img 
                src={image}
                alt={`${title}`}
            />
            <span className='title'>{title}</span>
            <span className='price'>{price}</span>
        </div>
    )
}

export default ProductCard;