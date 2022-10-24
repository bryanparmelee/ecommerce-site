import { useState } from "react";

import { 
    signInWithGooglePopup, 
    createUserDocFromAuth,
    signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

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
        const { user } = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    }

    const handleSubmit  = async (event) => {
        event.preventDefault();
           
        try {
           const response = await signInUserWithEmailAndPassword(email, password);
           console.log(response);
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
        <div>
            <h1>Sign in with email and password</h1>
            <form onSubmit={handleSubmit}>        

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

                <button type="submit">Sign In</button>
                <button type="button" onClick={signInWithGoogle}>Sign In With Google</button>
            </form>
        </div>
    )
}

export default SignInForm;