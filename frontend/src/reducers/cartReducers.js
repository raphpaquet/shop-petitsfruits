import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      // Look if we already have the item in the cart (product = product.id)
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          // if the item exist, we compare the id, if it's the same id, we replace by the newer item (item) else we don't change anything in the array, we put the x
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // if item doesn't exist => we concatenate the last version of cart item with the new item
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};