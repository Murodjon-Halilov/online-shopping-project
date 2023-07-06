import { useContext } from "react";
import "./CheckoutItem.style.scss";
import { CartContext } from "../../context/cartContext";

const CheckoutItem = ({ item }) => {

    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const removeItemHandler = () => removeItemFromCart(item);
    const addItemHandler = () => addItemToCart(item);
    const clearItemHandler = () => clearItemFromCart(item);

  const { name, quantity, imageUrl, price } = item;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
