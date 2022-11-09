import { useNavigate } from "react-router-dom";


const CategoryItem = ({ categoryItem }) => {
    const { category, image, route } = categoryItem;
    const navigate = useNavigate();
    const onNavigateHandler = () => 
        navigate(route);

    return (
        <div 
            className='group w-72 sm:w-96 h-52 flex flex-col justify-between items-center relative'
            onClick={onNavigateHandler}
        >
            
            <div className="w-full h-52 overflow-hidden border-2 group-hover:border-cyan-300">
            <img
                className="group-hover:scale-125 duration-1000 ease-in w-full h-52 object-cover" 
                src={image} 
                alt='' />
            </div>
            <div className="absolute top-20 left-18 w-32 h-14 flex items-center justify-center border border-black bg-slate-200/90">
                <h2 className="text-lg text-center font-bold text-gray-600">{category.toUpperCase()}</h2>
            </div>                    
        </div>
    )
}

export default CategoryItem;