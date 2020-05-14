import React from "react";
import localCart from "../utils/localCart";

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {
    //local storage
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
    //total cart
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  //remove
  const removeItem = (id) => {};
  //increase
  const increaseAmount = (id) => {};
  //decrease
  const decreaseAmount = (id) => {};
  //add cart
  const addToCart = (product) => {};
  //clear cart
  const clearCart = (id) => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
