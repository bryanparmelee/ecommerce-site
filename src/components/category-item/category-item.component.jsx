import './category-item.styles.scss';

const CategoryItem = ({ categoryItem }) => {
    const { category, image } = categoryItem;
    return (
        <div className='category-container'>
            <img src={image} alt='' />
            <div className='category-body-container'>
                <h2>{category}</h2>
                <p>Shop Now</p>
            </div>                    
        </div>
    )
}

export default CategoryItem;