// import './button.styles.scss';

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button 
            className="w-full h-10 px-4 bg-black text-white uppercase cursor-pointer flex justify-center items-center hover:bg-slate-300  hover:text-black hover:border-solid hover:border-black hover:border-2"
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;