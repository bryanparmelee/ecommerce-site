import CategoryItem from '../category-item/category-item.component';
import Hero from '../../assets/hero.jpg';

import CATEGORY_DATA from '../../categoryData';

const Directory = () => {
  const categories = CATEGORY_DATA;

    return (
      <div className='w-full p-12 flex flex-col items-center gap-24'>
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='text-6xl font-extrabold'>Welcome to the Deal Loft.</h1>
          <h4 className='font-thin text-3xl italic flex-end'>Prices good enough for anyone to appreciate.</h4>
          <img 
            className='p-8'
            src={Hero}
            alt='Happy dog looking at laptop screen'
          />
        </div>
        <div
          className='w-full flex flex-wrap justify-center gap-12 md:gap-8 lg:gap-4'>
          {categories.map((category) => (
            <CategoryItem key={category.id} categoryItem={category} />
          ))}
        </div>
      </div>
    )
}

export default Directory;