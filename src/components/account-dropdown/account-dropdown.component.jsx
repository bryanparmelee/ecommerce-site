import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button.component";

const AccountDropdown = () => {
    const { currentUser, setCurrentUser, isAccountOpen, setIsAccountOpen } = useContext(UserContext);

    const navigate = useNavigate();

    const signOut = () => {
        setCurrentUser(null);
        setIsAccountOpen(false);
    };

    const gotoSignInHandler = () => {
        setIsAccountOpen(false);
        navigate('/sign-in');
    }

    const gotoSignUpHandler = () => {
        setIsAccountOpen(false);
        navigate('/sign-up');
    }

    return (
        <div className="absolute w-60 h-auto flex flex-col p-5 border-solid border-2 bg-white top-16 right-7 z-50">
           {!currentUser ?
                ( <div className="h-full flex flex-col justify-evenly">
                   <div className="mb-4">
                        <span className="text-sm pb-1">Already have an account?</span>
                   
                        <Button onClick={gotoSignInHandler}>
                            SIGN IN
                        </Button>
                    </div>
                    <div>
                        <span className="text-sm pb-1">New here?</span>
                        <Button onClick={gotoSignUpHandler}>SIGN UP</Button>
                    </div>
                 </div>
                ) : (
                    <div className="h-24 flex flex-col justify-between">
                        <h2>{`Hello, ${currentUser.displayName}`}</h2>
                        <Button onClick={signOut}>SIGN OUT</Button>
                    </div>
                )
           }
        </div>
    )
}

export default AccountDropdown;