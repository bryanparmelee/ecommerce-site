import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import AccountDropdown from "../../components/account-dropdown/account-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
    const  {isAccountOpen, setIsAccountOpen } = useContext(UserContext);

    const toggleAccountOpen = () => setIsAccountOpen(!isAccountOpen);


    return (
      <>
        <div className="w-full h-12 flex px-4 justify-between items-center bg-slate-600">
            <Link className="logo-link" to='/'>
                LOGO
            </Link>
            <div className="w-4/6 h-full sm:w-72 flex justify-between sm:justify-between items-center bg-purple-300">
                <Link className="font-semibold cursor-pointer" to='/shop'>
                    SHOP
                </Link>
                <div 
                    className="font-semibold cursor-pointer"
                    onClick={toggleAccountOpen} 
                >
                    ACCOUNT
                </div>
                <div className="font-semibold cursor-pointer">
                <CartIcon />
                </div>
            </div>
            {isAccountOpen && <AccountDropdown />}   
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation;