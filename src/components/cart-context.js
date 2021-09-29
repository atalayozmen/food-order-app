import React from 'react';

const CartContext = React.createContext({
    cartItems: [],
    cartTotalPrice: 0,
    addCartItems: null,
    removeItem: null,
    cartState: null
})

export default CartContext;