import { useReducer } from "react";
import Cartcontext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD":
      const updateTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updateItem;
      let updateItems;
      if (existingCartItem) {
        updateItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updateItems = [...state.items];
        updateItems[existingCartItemIndex] = updateItem;
      } else {
        updateItems = state.items.concat(action.payload);
      }
      console.log(updateItems);
      return {
        items: updateItems,
        totalAmount: updateTotalAmount,
      };

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", payload: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", payload: id });
  };

  const cart_context = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <Cartcontext.Provider value={cart_context}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
