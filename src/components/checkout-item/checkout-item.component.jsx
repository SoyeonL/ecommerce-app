import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      {/* <div> */}
      {/* <button onClick={() => removeItemFromCart(item)}>decrease</button> */}
      <span className="quantity">{quantity}</span>
      {/* <button onClick={() => addItemToCart(item)}>increase</button> */}
      {/* </div> */}
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
      {/* <button>Remove</button> */}
    </div>
  );
};

export default CheckoutItem;
