// import './button.styles.scss';

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button 
            className="w-4/5 h-9 px-8 bg-black text-white uppercase cursor-pointer flex justify-center items-center rounded-3xl hover:bg-white hover:text-black hover:border-solid hover:border-black hover:border-2"
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;