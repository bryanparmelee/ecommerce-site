import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo_transparent.png';
import { ReactComponent as MenuBars } from '../../assets/menu-bars.svg';


import CartIcon from "../../components/cart-icon/cart-icon.component";

import AccountDropdown from "../../components/account-dropdown/account-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
    const ref = useRef();

    const  {isAccountOpen, setIsAccountOpen } = useContext(UserContext);
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen);
        setIsAccountOpen(false);
    }

    const navigate = useNavigate();


    const handleShopNav = () => {
        setIsNavBarOpen(false);
        navigate('/shop');
    }

    const toggleAccountOpen = () => {
        setIsNavBarOpen(false);
        setIsAccountOpen(!isAccountOpen);
    }
    

    const navStyles = "hidden sm:flex w-4/6 h-full sm:w-72 justify-between sm:justify-between items-center relative text-cyan-300";

    const mobileNavStyles = "absolute top-16 left-0 w-full h-24 flex flex-col justify-evenly items-center bg-slate-200/90 z-100";

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if(isNavBarOpen && ref.current && !ref.current.contains(e.target)) {
                setIsNavBarOpen(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        }
    }, [isNavBarOpen]);

    return (
      <>
        <nav className="w-full h-16 flex px-4 justify-between items-center relative bg-gray-600 z-10">
            <Link className="text-white" to='/'>
                <img
                    className="w-16 sm:w-28 pt-2" 
                    src={Logo}
                    alt='Deal loft logo'
                />
            </Link>

            <button className="w-16 sm:hidden" onClick={toggleNavBar}><MenuBars /></button>

            <div className={isNavBarOpen ? mobileNavStyles : navStyles} ref={ref}>
                    <div className="font-semibold cursor-pointer" onClick={handleShopNav}>
                        SHOP
                    </div>
                    <div 
                        className="font-semibold cursor-pointer"
                        onClick={toggleAccountOpen} 
                    >
                        ACCOUNT
                    </div>
                </div>
            <div className="font-semibold cursor-pointer">
                <CartIcon />
            </div>
            {isAccountOpen && <AccountDropdown />}   
        </nav>
        <Outlet />
      </>
    )
  }

  export default Navigation;