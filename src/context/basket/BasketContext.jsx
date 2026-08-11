import { createContext, useReducer } from "react";
import { allFunc, totalFunc } from "../../myFunctions";

// eslint-disable-next-line react-refresh/only-export-components
export const BasketContext = createContext();

const initialState = {
  listBasket: [],
  countAll: 0,
  total: 0,
  stateBasket: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "add":
      if (!state.listBasket.find((item) => item.id == action.payload.id))
        state.listBasket.push({ ...action.payload, countT: 1 });
      return {
        listBasket: [...state.listBasket],
        stateBasket: false,
        total: totalFunc(state.listBasket),
        countAll: allFunc(state.listBasket),
      };

    case "delete": {
      const temp = state.listBasket.filter(
        (item) => item.id !== action.payload.id,
      );

      return {
        ...state,
        listBasket: temp,
        stateBasket: false,
        total: totalFunc(temp),
        countAll: allFunc(temp),
      };
    }

    case "plus": {
      const temp = state.listBasket.map((item) =>
        item.id === action.payload.id
          ? { ...item, countT: item.countT + 1 }
          : item,
      );

      return {
        ...state,
        listBasket: temp,
        total: totalFunc(temp),
        countAll: allFunc(temp),
      };
    }

    case "minus": {
      const item = state.listBasket.find(
        (item) => item.id == action.payload.id,
      );

      if (!item) return state;

      if (item.countT === 1) {
        const temp = state.listBasket.filter(
          (item) => item.id != action.payload.id,
        );

        return {
          listBasket: temp,
          stateBasket: false,
          total: totalFunc(temp),
          countAll: allFunc(temp),
        };
      }

      const temp = state.listBasket.map((item) =>
        item.id == action.payload.id
          ? { ...item, countT: item.countT - 1 }
          : item,
      );

      return {
        ...state,
        listBasket: temp,
        total: totalFunc(temp),
        countAll: allFunc(temp),
      };
    }
  }
}

function Basketprovider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
}

export default Basketprovider;
