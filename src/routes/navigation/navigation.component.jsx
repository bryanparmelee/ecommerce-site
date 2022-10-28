import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import AccountDropdown from "../../components/account-dropdown/account-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import './navigation.styles.scss';
import '../../components/cart-dropdown/cart-dropdown.styles.scss';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const  {isAccountOpen, setIsAccountOpen } = useContext(UserContext);

    const toggleAccountOpen = () => setIsAccountOpen(!isAccountOpen);

    return (
      <>
        <div className="navigation">
            <Link className="logo-link" to='/'>
                LOGO
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                <div 
                    className="nav-link"
                    onClick={toggleAccountOpen} 
                >
                    ACCOUNT
                </div>
                <CartIcon />
            </div>
            {isAccountOpen && <AccountDropdown />}
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation;