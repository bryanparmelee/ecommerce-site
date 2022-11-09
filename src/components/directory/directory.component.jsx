import CategoryItem from '../category-item/category-item.component';

import CATEGORY_DATA from '../../categoryData';

const Directory = () => {
  const categories = CATEGORY_DATA;

    return (
        <div className='w-full h-full p-6 flex flex-wrap items-center justify-center gap-4 bg-slate-100'>
          {categories.map((category) => (
            <CategoryItem key={category.id} categoryItem={category} />
          ))}
        </div>
    )
}

export default Directory;