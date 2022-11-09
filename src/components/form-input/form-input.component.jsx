const noInputStyles = "absolute top-1.5 left-0 pointer-events-none text-md transition duration-300 ease-in-out text-gray-600/0";
const withInputStyles ="absolute -top-3.5 left-0 text-sm transition-all text-gray-400";


const FormInput = ({ label, ...otherProps }) => {
    
    return (
        <div className="w-full relative">            
            <input
                className='peer h-10 w-full border-b-2 border-gray-300 focus:outline-none' 
                placeholder={label}
                {...otherProps} />
           {label && (
                <label
            className={otherProps.value.length ? withInputStyles : noInputStyles}
                >
                    {label}
                </label>
             )}
        </div>
    )
}

export default FormInput;