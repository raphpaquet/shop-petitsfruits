import {
  CART_ADD_ITEM,
  // CART_ADD_ITEM_FAIL,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      // Look if we already have the item in the cart (product = product.id)
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        // if the item exist, we compare the id, if it's the same id, we replace by the newer item (item) else we don't change anything in the array, we put the x
        return {
          ...state,
          error: '',
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
         // if item doesn't exist => we concatenate the last version of cart item with the new item
        return { ...state, error: '', cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        error: '',
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    // case CART_ADD_ITEM_FAIL:
    //   return { ...state, error: action.payload };
    case CART_EMPTY:
      return { ...state, error: '', cartItems: [] };
    default:
      return state;
  }
};