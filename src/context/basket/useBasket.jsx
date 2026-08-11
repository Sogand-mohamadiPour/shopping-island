import { useContext } from "react";
import { BasketContext } from "./BasketContext";

export const useBasket = () => {
  const { state, dispatch } = useContext(BasketContext);

  return [state, dispatch];
};
