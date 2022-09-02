import { PlaylistAddOutlined } from "@material-ui/icons";
import React, { useReducer, useContext, createContext } from "react";

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

// const initialState = {
//   // state: [];
//   count: 1,
//   cost: 80,
// };

const reducer = (state = [], action, countt = 1, price) => {
  switch (action.type) {
    case "ADD":
      const isItem = state.find((val) => val.id === action.item.id);
      console.log(`item exists:  ${isItem}`);
      console.log(`Action items: ${action.item.title}`);
      console.log(`Action items ::: ${action.item}`);
      return isItem
        ? [
            ...state,
            {
              ...isItem,
              count: (isItem.count += 1),
              price: (action.item.price = isItem.price + action.item.price),
            },

            // console.log(`state items =  ${action.item.price}`),
          ]
        : [...state, action.item];
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "REMOVEALL":
      // return { ...state, item: [] };
      // const deleteArr = [...state];
      // deleteArr.map((item) => item.id !== action.item.id);
      // deleteArr.map((item) => console.log(`item id : ${item.id}`));
      return [];

    case "INCREMENT":
      let updatedCart = state.item.map((currElem) => {
        // if (currElem.id === action.payload) {
        //   return { ...state, quantity: currElem.quantity + 1 };
        // }
        // return currElem;
      });

      return { ...state, item: updatedCart };

    default:
      throw new Error(`unknown action ${action.type}`);
  }

  //   if (action.type === "INCREMENT") {
  //     const updatedCart = state.item.map((curElem) => {
  //       if (curElem.id === action.payload) {
  //         return { ...curElem, quantity: curElem.quantity + 1 };
  //       }
  //       return curElem;
  //     });

  //     return { ...state, item: updatedCart };
};

export const CartProvider = ({ children }) => {
  const [state, stateDispatch] = useReducer(reducer, []);
  const [count, countDispatch] = useReducer(reducer, 0);

  return (
    <CartDispatchContext.Provider value={stateDispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);
