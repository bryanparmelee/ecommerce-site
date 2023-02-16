import Spinner from "../spinner/spinner.component";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  blue: "blue",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]:
      "w-[240px] transition ease-in-out duration-300 font-bold px-8 py-2 bg-black text-white uppercase cursor-pointer rounded-3xl hover:bg-zinc-700 whitespace-nowrap",
    [BUTTON_TYPE_CLASSES.blue]:
      "w-[240px] transition ease-in-out duration-300 font-bold px-8 py-2 bg-blue-500 text-white uppercase cursor-pointer rounded-3xl hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 whitespace-nowrap",
  }[buttonType]);

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <button className={CustomButton} disabled={isLoading} {...otherProps}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
