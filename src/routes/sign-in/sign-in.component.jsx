import SignInForm from "../../components/sign-in-form/sign-in-form.component";

// import './sign-in.styles.scss';

const SignIn = () => {
    return (
        <div className="w-full h-screen px-8 flex flex-col justify-center items-center bg-purple-500">
            <SignInForm />
        </div>
    )
}

export default SignIn;