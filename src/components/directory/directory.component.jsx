import CategoryItem from "../category-item/category-item.component";
import Hero from "../../assets/hero.jpg";

import CATEGORY_DATA from "../../categoryData";

const Directory = () => {
  const categories = CATEGORY_DATA;

  return (
    <div className="flex w-full flex-col items-center gap-24 p-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-extrabold">Welcome to the Deal Loft.</h1>
        <h4 className="flex-end text-3xl font-thin italic">
          Prices good enough for anyone to appreciate.
        </h4>
        <img
          className="md:w-[640px] md:p-8 lg:w-[1024px]"
          src={Hero}
          alt="Happy dog looking at laptop screen"
        />
      </div>
      <div className="md:px-18 grid w-full grid-cols-1 justify-items-center gap-24 md:grid-cols-2 lg:px-24">
        {categories.map((category) => (
          <CategoryItem key={category.id} categoryItem={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
