import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button.component";

import './account-dropdown.styles.scss';

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

    return (
        <div className="account-dropdown-container">
           {!currentUser ?
                ( <>
                    <h2>Already have an account?</h2>
                   
                        <Button onClick={gotoSignInHandler}>
                            SIGN IN
                        </Button>
                 
                    <span>New here? <Link to='/sign-up'>Create an account</Link></span>
                 </>
                ) : (
                    <>
                        <h2>Hello, {currentUser.displayName}</h2>
                        <Button onClick={signOut}>SIGN OUT</Button>
                    </>
                )
           }
        </div>
    )
}

export default AccountDropdown;