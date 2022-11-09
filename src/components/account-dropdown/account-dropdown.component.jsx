import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button.component";

const AccountDropdown = () => {
    const ref = useRef();
    const navigate = useNavigate();

    const { currentUser, setCurrentUser, isAccountOpen, setIsAccountOpen } = useContext(UserContext);
 
    const gotoSignInHandler = () => {
        setIsAccountOpen(false);
        navigate('/sign-in');
    }

    const gotoSignUpHandler = () => {
        setIsAccountOpen(false);
        navigate('/sign-up');
    }

    useEffect(() => {
        const checkIfClickedOutsideAccount = (e) => {
            if (isAccountOpen && ref.current && !ref.current.contains(e.target)) {
                setIsAccountOpen(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutsideAccount);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutsideAccount);
        }
    }, [isAccountOpen, setIsAccountOpen])    

    return (
        <div ref={ref} className="absolute w-60 h-auto flex flex-col p-5 border-solid border-2 bg-white top-16 right-7 z-50">
           {!currentUser &&
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
                ) 
           }
        </div>
    )
}

export default AccountDropdown;