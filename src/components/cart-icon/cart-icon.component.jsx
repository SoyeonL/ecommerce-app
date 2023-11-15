import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
