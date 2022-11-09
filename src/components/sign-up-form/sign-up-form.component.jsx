import { useContext, useState } from "react";

import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocFromAuth 
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const navigate = useNavigate();
    const gotoSignInHandler = () =>
        navigate('/sign-in');

    const gotoShop = () => 
        navigate('/shop');

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit  = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserDocFromAuth(user, { displayName });
            resetFormFields();
            setCurrentUser(user);
            gotoShop();
           
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Email already in use');
            } else {
                console.log('Unable to create user due to error', error);
            }
            
        }
    
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="w-64 sm:w-96 h-5/6 p-6 bg-white flex flex-col items-center justify-center rounded-lg shadow-lg">
            <h1 className="text-xl font-bold">Sign up with email and password</h1>
            <form
                className="w-full h-full flex flex-col justify-evenly" 
                onSubmit={handleSubmit}>

               <FormInput
                    label="Display Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName}                         
                />

                <FormInput
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}                         
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                 />

                <FormInput
                    label="Confirm Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword}                         
                />
                <Button type="submit">Sign Up</Button>

            </form>
            <div className="w-full">
                <span className="text-sm pb-2">Already have an account?</span>
                <Button onClick={gotoSignInHandler}>SIGN IN</Button>
            </div>
        </div>
    )
}

export default SignUpForm;