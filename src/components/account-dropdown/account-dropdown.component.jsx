import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Link } from "react-router-dom";
import Button from "../button/button.component";

import './account-dropdown.styles.scss';

const AccountDropdown = () => {
    const { currentUser, setCurrentUser, isAccountOpen, setIsAccountOpen } = useContext(UserContext);


    const signOut = () => {
        setCurrentUser(null);
        setIsAccountOpen(false);
    };

    return (
        <div className="account-dropdown-container">
           {!currentUser ?
                ( <>
                    <h2>Already have an account?</h2>
                    <Link to='/sign-in' onClick={() => setIsAccountOpen(!isAccountOpen)}>
                        <Button>
                            SIGN IN
                        </Button>
                    </Link>
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