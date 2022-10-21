import { 
    createUserDocFromAuth,
    signInWithGooglePopup,
 } from '../../utils/firebase/firebase.utils';

 import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }

    return (
        <div>
            <h3>Sign in page is this</h3>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;