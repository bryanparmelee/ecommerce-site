import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo_transparent2.png';
import { ReactComponent as MenuBars } from '../../assets/menu-bars.svg';

import CartIcon from "../../components/cart-icon/cart-icon.component";

import AccountDropdown from "../../components/account-dropdown/account-dropdown.component";

import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
    const ref = useRef();

    const  {isAccountOpen, setIsAccountOpen, currentUser, setCurrentUser } = useContext(UserContext);
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
        setIsAccountOpen(true);
    }

    const signOut = () => {
        setCurrentUser(null);
        setIsAccountOpen(false);
        navigate('/')    
    };
    
    useEffect(() => {
        const checkIfClickedOutsideNavBar = (e) => {
            if(isNavBarOpen && ref.current && !ref.current.contains(e.target)) {
                setIsNavBarOpen(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutsideNavBar);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutsideNavBar);
        }
    }, [isNavBarOpen]);

    const navStyles = "hidden sm:flex h-full sm:w-60 ml-auto sm:justify-evenly items-center relative text-cyan-300 border-2";

    const mobileNavStyles = "absolute top-16 left-0 w-full h-24 flex flex-col justify-evenly items-center bg-slate-200/90 z-100";

    return (
      <>
        <nav className="w-full flex justify-between items-center relative bg-white z-10 border-2">
            <Link to='/'>
                <img
                    className="w-16 sm:w-20 border" 
                    src={Logo}
                    alt='Deal loft logo'
                />
            </Link>

            <button className="w-16 sm:hidden" onClick={toggleNavBar}><MenuBars /></button>

            <div className={isNavBarOpen ? mobileNavStyles : navStyles} ref={ref}>

                <div className="font-semibold cursor-pointer" onClick={handleShopNav}>
                    SHOP
                </div>
                <div className="font-semibold cursor-pointer">
                    {!currentUser ? 
                        (<span onClick={toggleAccountOpen}>SIGN IN</span>) :
                            (<span onClick={signOut}>SIGN OUT</span>)
                    }
                </div>
                <div className="font-semibold cursor-pointer">
                    <CartIcon />
                </div>
            </div>           
            {isAccountOpen && <AccountDropdown />}   
        </nav>
        <Outlet />
      </>
    )
  }

  export default Navigation;