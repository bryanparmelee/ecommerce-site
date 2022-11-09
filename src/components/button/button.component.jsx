import Spinner from "../spinner/spinner.component";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    blue: "blue",
  };

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: "font-bold w-full h-10 px-4 bg-cyan-300 text-gray-600 uppercase cursor-pointer flex justify-center items-center hover:bg-gray-600  hover:text-cyan-300 hover:border-solid hover:border-cyan-300 hover:border-2",
    [BUTTON_TYPE_CLASSES.blue]: "w-full h-10 px-4 bg-blue-500 text-white uppercase cursor-pointer flex justify-center items-center hover:bg-white  hover:text-blue-500 hover:border-blue-500 hover:border-2",
}[buttonType])

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <button 
            className={CustomButton}
            disabled={isLoading}            
            {...otherProps}
        >
            {isLoading ? <Spinner /> : children}
        </button>
    );
};

export default Button;