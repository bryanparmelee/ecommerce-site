import { useState } from "react";

import { 
    signInWithGooglePopup, 
    createUserDocFromAuth,
    signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const naviagte = useNavigate();
    const gotoSignUpHandler = () => {
        naviagte('/sign-up');
    }

    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();        
    }

    const handleSubmit  = async (event) => {
        event.preventDefault();
           
        try {
           const { user } = await signInUserWithEmailAndPassword(
                email, 
                password
            );
            resetFormFields();
        } catch (error) {
            console.log(error);
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('Email not found');
                    break;  
                default:
                    console.log(error);                
            }
        }
    
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="w-72 sm:w-96 h-5/6 p-6 bg-white flex flex-col items-center justify-center rounded-lg border border-black">
            <h1 className="text-2xl font-bold">Sign in with email and password</h1>
            <form
                className="w-full h-full flex flex-col justify-evenly" 
                onSubmit={handleSubmit}>        
               
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
                    <Button type="submit">Sign In</Button>
         
                <div className="w-full">
                    <p className="w-full text-sm text-center font-light">——— or ———</p>
                    <Button 
                        buttonType={BUTTON_TYPE_CLASSES.blue}
                        onClick={signInWithGoogle}
                    >Sign In With Google</Button>
                </div>
            </form>
            <div className="w-full">
                <span>Don't have an account?</span>
                <Button type="button" onClick={gotoSignUpHandler}>Create an account</Button>
            </div>
        </div>
    )
}

export default SignInForm;