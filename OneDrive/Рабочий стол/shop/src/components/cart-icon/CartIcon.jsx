import { useContext } from "react";
import {CartIconContainer, ShoppingIcon, ItemCount} from './CartIcon.style';
import { CartContext } from "../../context/cartContext";

const CartIcon = () => {

  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen); 

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon 