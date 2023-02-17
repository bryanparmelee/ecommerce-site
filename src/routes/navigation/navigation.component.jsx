import { useContext, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo_block.png";
import MenuBars from "../../assets/menu-bars.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import AccountDropdown from "../../components/account-dropdown/account-dropdown.component";

import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
  const ref = useRef();

  const { isAccountOpen, setIsAccountOpen, currentUser, setCurrentUser } =
    useContext(UserContext);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
    setIsAccountOpen(false);
  };

  const navigate = useNavigate();

  const handleShopNav = () => {
    setIsNavBarOpen(false);
    navigate("/shop");
  };

  const toggleAccountOpen = () => {
    setIsNavBarOpen(false);
    setIsAccountOpen(true);
  };
  const signOut = () => {
    // setCurrentUser(null);
    signOutUser();
    setIsAccountOpen(false);
    navigate("/");
  };

  const navStyles = "hidden sm:flex h-full ml-auto gap-5 items-center relative";

  const mobileNavStyles =
    "absolute top-16 left-0 w-full h-24 flex flex-col justify-evenly items-center bg-slate-200/90 z-100 backdrop-blur";

  return (
    <>
      <nav className="relative z-10 flex w-full items-center justify-between bg-white px-4 py-4 sm:px-12">
        <Link to="/">
          <img className="w-16 sm:w-20 " src={Logo} alt="Deal loft logo" />
        </Link>

        <button className="sm:hidden" onClick={toggleNavBar}>
          <img id="menu-bars" className="w-6" src={MenuBars} alt="menu" />
        </button>

        <div className={isNavBarOpen ? mobileNavStyles : navStyles} ref={ref}>
          <div className="cursor-pointer" onClick={handleShopNav}>
            Shop
          </div>
          <div className="cursor-pointer">
            {!currentUser ? (
              <span onClick={toggleAccountOpen}>Sign In</span>
            ) : (
              <span onClick={signOut}>Sign Out</span>
            )}
          </div>
          <div className="cursor-pointer">
            <CartIcon />
          </div>
        </div>
        {isAccountOpen && <AccountDropdown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
