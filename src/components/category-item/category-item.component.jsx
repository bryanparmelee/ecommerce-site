import { useNavigate } from "react-router-dom";


const CategoryItem = ({ categoryItem }) => {
    const { category, image, route } = categoryItem;
    const navigate = useNavigate();
    const onNavigateHandler = () => 
        navigate(route);

    return (
        <div 
            className='group transistion ease-in-out w-80 md:w-72 lg:w-60 h-80 md:h-72 lg:h-60 flex flex-col justify-between items-center relative shadow-md rounded-xl hover:scale-105 hover:shadow-xl duration-200 cursor-pointer'
            onClick={onNavigateHandler}
        >
            
            <div className="w-full h-full overflow-hidden rounded-xl">
            <img
                className="w-full object-fill " 
                src={image} 
                alt='' />
            </div>
            <div className="absolute bottom-5 py-2 px-4 flex items-center justify-center bg-black rounded-3xl group-hover:bg-zinc-700">
                <h2 className="text-lg text-center text-white font-bold">Shop {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            </div>                    
        </div>
    )
}

export default CategoryItem;