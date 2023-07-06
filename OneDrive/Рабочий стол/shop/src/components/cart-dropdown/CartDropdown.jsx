import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropdown.style";
import { CartContext } from "../../context/cartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
