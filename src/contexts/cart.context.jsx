import { createContext, useState } from "react";

export const CartContext = createContext({
  isToggle: false,
  setIsToggle: () => {},
});

export const CartProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);
  const value = { isToggle, setIsToggle };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
