import CategoryItem from '../category-item/category-item.component';

import CATEGORY_DATA from '../../categoryData';

const Directory = () => {
  const categories = CATEGORY_DATA;

    return (
      <div className='w-full p-12 flex flex-col items-center gap-24'>
        <div className='flex flex-col'>
          <h1 className='text-6xl font-extrabold'>Welcome to the deal loft.</h1>
          <h4 className='font-thin text-3xl italic flex-end'>Where deals are lofty like our ideals.</h4>
        </div>
        <div
          className='w-full flex flex-wrap items-center justify-center gap-4'>
          {categories.map((category) => (
            <CategoryItem key={category.id} categoryItem={category} />
          ))}
        </div>
      </div>
    )
}

export default Directory;