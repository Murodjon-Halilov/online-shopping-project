import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CartIcon from "../components/cart-icon/CartIcon";
import CartDropdown from "../components/cart-dropdown/CartDropdown";
import {CartContext} from '../context/cartContext';
import { LogoContainer, NavigationContainer, NavLinks, NavLink } from "./Navigation.style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <span className="navigation__links__link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />} 
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
