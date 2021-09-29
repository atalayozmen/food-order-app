import "./App.css";
import Navigation from "./components/Navigation";
import React, { useEffect, useReducer } from "react";
import IntroText from "./components/IntroText";
import Menu from "./components/Menu";
import CartContext from "./components/cart-context";

const cartReducer = (state, action) => {
  if (action.type === "NEW_ITEM_ADDED") {
    let found = false;
    const cartItemsCopied = state.cartItems.slice();
    let sum = 0;

    var isFound = false;
    var newItem;

    const myArray = cartItemsCopied.map((item) => {
      if (item.foodName === action.val.foodName) {
        newItem = { foodName: item.foodName, price: item.price, amount: item.amount + action.val.amount };
        isFound = true;
        return newItem;
      } else {
        return item;
      }
    });

    if (!isFound) {
      myArray.push(action.val);
    }

    console.log(myArray);
    for (let i = 0; i < myArray.length; i++) {
      sum += myArray[i].price * myArray[i].amount;
    }
    return { cartItems: myArray, cartTotalPrice: sum, totalNumberOfItems: state.totalNumberOfItems + action.val.amount };
  }

  if (action.type === "ITEM_REMOVED") {
    let sum = 0;
    const cartItemsCopied = state.cartItems.slice();

    const myArray = cartItemsCopied.map((item) => {
      if (item.foodName === action.val) {
        newItem = { foodName: item.foodName, price: item.price, amount: item.amount - 1 };
        isFound = true;
        return newItem;
      } else {
        return item;
      }
    });

    for (let i = 0; i < myArray.length; i++) {
      sum += myArray[i].price * myArray[i].amount;
    }

    const filteredItems = myArray.filter((item) => item.amount !== 0);
    return { cartItems: filteredItems, cartTotalPrice: sum, totalNumberOfItems: state.totalNumberOfItems - 1 };
  }
};

function App() {
  const initialState = { cartItems: [], cartTotalPrice: 0, totalNumberOfItems: 0 };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  const addCartItems = (itemName, itemPrice, itemAmount) => {
    const newItems = {
      foodName: itemName,
      price: itemPrice,
      amount: itemAmount,
    };
    let isNewItem = true;
    cartDispatch({ type: "NEW_ITEM_ADDED", val: newItems });
  };

  const removeItem = (itemName) => {
    cartDispatch({ type: "ITEM_REMOVED", val: itemName });
  };

  return (
    <React.Fragment>
      <CartContext.Provider value={{ addCartItems: addCartItems, removeItem: removeItem, cartState: cartState }}>
        <div style={{ fontFamily: "sans-serif", backgroundColor: "#A9E4D7", paddingBottom: "20px" }}>
          <Navigation />
          <IntroText />
          <Menu />
        </div>
      </CartContext.Provider>
    </React.Fragment>
  );
}

export default App;
