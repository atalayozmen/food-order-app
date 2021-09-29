import "./App.css";
import Navigation from "./components/Header/Navigation";
import React, { useReducer } from "react";
import IntroText from "./components/Header/IntroText";
import Menu from "./components/Menu/Menu";
import CartContext from "./components/Contexts/cart-context";

const cartReducer = (state, action) => {
  if (action.type === "NEW_ITEM_ADDED") {
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

  if(action.type === "EMPTY_ARRAY"){
    const cartItemsCopied = state.cartItems.slice();
    cartItemsCopied.length = 0;
    return { cartItems: cartItemsCopied, cartTotalPrice: 0, totalNumberOfItems: 0 };
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
    cartDispatch({ type: "NEW_ITEM_ADDED", val: newItems });
  };

  const removeItem = (itemName) => {
    cartDispatch({ type: "ITEM_REMOVED", val: itemName });
  };

  const emptyArray = () => {
    cartDispatch({type: "EMPTY_ARRAY"});
  }

  return (
    <React.Fragment>
      <CartContext.Provider value={{ addCartItems: addCartItems, removeItem: removeItem, emptyArray: emptyArray, cartState: cartState }}>
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
