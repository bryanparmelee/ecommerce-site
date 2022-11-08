import Spinner from "../spinner/spinner.component";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    blue: "blue",
  };

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: "w-full h-10 px-4 bg-black text-white uppercase cursor-pointer flex justify-center items-center hover:bg-slate-300  hover:text-black hover:border-solid hover:border-black hover:border-2",
    [BUTTON_TYPE_CLASSES.blue]: "w-full h-10 px-4 bg-blue-500 text-white uppercase cursor-pointer flex justify-center items-center hover:bg-slate-300  hover:text-blue hover:border-solid hover:border-blue hover:border-2",
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