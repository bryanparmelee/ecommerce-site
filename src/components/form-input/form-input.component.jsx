// import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
    
    return (
        <div className="w-full relative">            
            <input
                className='peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none' 
                placeholder={label}
                {...otherProps} />
            <label
            className='absolute -top-3.5 left-0 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'    
            >{label}
            </label>
        </div>
    )
}

export default FormInput;