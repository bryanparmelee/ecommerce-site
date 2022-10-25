import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";

import './navigation.styles.scss';
import '../../components/cart-dropdown/cart-dropdown.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);

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
                <Link className="nav-link" to='/auth'>
                    SIGN IN
                </Link>
                <CartIcon />
            </div>
            <CartDropdown />
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation;