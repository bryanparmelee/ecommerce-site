import { useNavigate } from "react-router-dom";

const CategoryItem = ({ categoryItem }) => {
  const { category, image, route } = categoryItem;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <div
      className="transistion md:72 group relative flex h-80 w-80 cursor-pointer flex-col items-center justify-between rounded-xl shadow-lg duration-200 ease-in-out hover:scale-105 hover:shadow-xl"
      onClick={onNavigateHandler}
    >
      <div className="h-full w-full overflow-hidden rounded-xl">
        <img className="w-full object-fill " src={image} alt="" />
      </div>
      <div className="absolute bottom-5 flex items-center justify-center rounded-3xl bg-black py-2 px-4 group-hover:bg-zinc-700">
        <h2 className="text-center text-lg font-bold text-white">
          Shop {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
      </div>
    </div>
  );
};

export default CategoryItem;
