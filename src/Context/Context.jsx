import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// const cart = {
//   0: 0,
//   1: 0,
//   2: 0,
//   .....
// }

// cart.0 = 0
// cart.1 = 0
// cart.2 = 0
// ...

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  console.log(cartItems);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    window.scrollTo(0, 0);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // [itemId]=prev[itemId]+1 ---- from {2:0} to {2:1}.
  // itemId=prev[itemId]+1 ---- from {2:0} to {2:0, itemId:1}

  // () => ({ }) here {} means object
  // () => { } here {} means code block

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItems = 0;
    for (let item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  // if (cartItems[item] > 0) {
  //      totalItems += cartItems[item];
  // }

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
