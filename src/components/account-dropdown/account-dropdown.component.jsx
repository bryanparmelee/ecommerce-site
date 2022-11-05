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
        setIsAccountOpen(!isAccountOpen)
        navigate('/sign-in');
    }

    const gotoSignUpHandler = () => {
        navigate('/sign-up');
    }

    return (
        <div className="absolute w-60 h-60 flex flex-col p-5 border-solid border-2 bg-white top-12 right-12 z-5">
           {!currentUser ?
                ( <div className="h-full flex flex-col justify-evenly">
                   <div>
                        <h2>Already have an account?</h2>
                   
                        <Button onClick={gotoSignInHandler}>
                            SIGN IN
                        </Button>
                    </div>
                    <div>
                        <span>New here?</span>
                        <Button onClick={gotoSignUpHandler}>SIGN UP</Button>
                    </div>
                 </div>
                ) : (
                    <div className="h-full flex flex-col justify-between">
                        <h2>Hello, {currentUser.displayName}</h2>
                        <Button onClick={signOut}>SIGN OUT</Button>
                    </div>
                )
           }
        </div>
    )
}

export default AccountDropdown;