import { CarType } from '../hooks/useData';

export interface CartState {
  cart: CarType[];
}

const initialState: CartState = { cart: [] };

export type CartAction = { type: 'ADD_CART'; payload: CarType };

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
) => {
  switch (action.type) {
    case 'ADD_CART': {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    default: {
      return state;
    }
  }
};
