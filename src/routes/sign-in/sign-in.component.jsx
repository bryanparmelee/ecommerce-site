import { 
    createUserDocFromAuth,
    signInWithGooglePopup,
 } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocFromAuth(user);
    }
    return (
        <div>
            <h3>Sign in page is this</h3>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}

export default SignIn;