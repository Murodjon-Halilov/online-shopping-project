import { useContext } from 'react';
import Button from '../button/Button';
import './ProductCard.style.scss';
import { CartContext } from '../../context/cartContext';

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const {addItemToCart} = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(product);
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
