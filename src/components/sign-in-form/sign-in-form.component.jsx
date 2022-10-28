import { useState } from "react";

import { 
    signInWithGooglePopup, 
    createUserDocFromAuth,
    signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
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
        <div className="sign-in-form-container">
            <h1>Sign in with email and password</h1>
            <form
                className="sign-in-form" 
                onSubmit={handleSubmit}>        
                <>
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
                </>
                <span>OR</span>
                <Button onClick={signInWithGoogle}>Sign In With Google</Button>
            </form>
        </div>
    )
}

export default SignInForm;