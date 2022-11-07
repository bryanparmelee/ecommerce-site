import { useNavigate } from "react-router-dom";


const CategoryItem = ({ categoryItem }) => {
    const { category, image, route } = categoryItem;
    const navigate = useNavigate();
    const onNavigateHandler = () => 
        navigate(route);

    return (
        <div 
            className='group w-80 h-52 flex flex-col justify-between items-center relative'
            onClick={onNavigateHandler}
        >
            
            <div className="w-80 h-52 px-1 overflow-hidden border-2 border-black">
            <img
                className="group-hover:scale-110 duration-500 ease-in w-full h-52 object-cover" 
                src={image} 
                alt='' />
            </div>
            <div className="absolute top-20 left-24 w-32 h-14 flex items-center justify-center border border-black bg-slate-200/75">
                <h2 className="text-lg text-center font-bold">{category.toUpperCase()}</h2>
            </div>                    
        </div>
    )
}

export default CategoryItem;