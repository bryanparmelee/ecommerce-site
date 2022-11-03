import CategoryItem from '../category-item/category-item.component';

const Directory = ({ categories }) => {
    return (
        <div className='w-full h-screen grid grid-cols-2 justify-items-center items-center gap-4 bg-red-200'>
          {categories.map((category) => (
            <CategoryItem key={category.id} categoryItem={category} />
          ))}
        </div>
    )
}

export default Directory;