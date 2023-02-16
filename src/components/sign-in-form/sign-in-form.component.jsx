import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const naviagte = useNavigate();
  const gotoSignUpHandler = () => {
    naviagte("/sign-up");
  };

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    await naviagte("/shop");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      naviagte("/shop");
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("Email not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex max-w-[600px] flex-col items-center gap-4 rounded-lg p-8 shadow-lg">
      <h1 className="text-xl font-bold">Sign in with email and password</h1>
      <form
        className="flex h-64 w-full flex-col items-center justify-evenly"
        onSubmit={handleSubmit}
      >
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">Sign In</Button>
      </form>
      <div className="flex w-full flex-col items-center justify-between">
        <p className="w-full pb-2 text-center text-sm font-light">——— or ———</p>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.blue}
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </div>
      <div className="flex w-full flex-col items-center">
        <span className="pb-1 text-sm">Don't have an account?</span>
        <Button type="button" onClick={gotoSignUpHandler}>
          Create account
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
