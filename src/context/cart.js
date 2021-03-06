import React from "react";
import localCart from "../utils/localCart";

function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getCartFromLocalStorage());
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {
    //local storage for cart item
    localStorage.setItem("cart", JSON.stringify(cart));
    //cart item
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
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
    // let newCart = [...cart].filter((item) => item.id !== id);
    // setCart(newCart); same thing as above
  };
  //increase
  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  };
  //decrease
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newCart);
    }
  };
  //add cart
  const addToCart = (product) => {
    const { id, image, title, price } = product;
    const item = [...cart].find((item) => item.id === id);

    if (item) {
      increaseAmount(id);
      return;
    } else {
      const newItem = { id, image, title, price, amount: 1 }; //default amount is 1 when newitem added to cart
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  //clear all cart
  const clearCart = (id) => {
    setCart([]);
  };

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
