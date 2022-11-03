// import './category-item.styles.scss';

const CategoryItem = ({ categoryItem }) => {
    const { category, image } = categoryItem;
    return (
        <div className='w-96 h-80 rounded-md flex flex-col justify-between items-center bg-stone-500'>
            <img
                className="w-full h-3/4 object-cover" 
                src={image} 
                alt='' />
            <div className="flex flex-col items-center justify-center">
                <h2>{category.toUpperCase()}</h2>
                <p>Shop Now</p>
            </div>                    
        </div>
    )
}

export default CategoryItem;