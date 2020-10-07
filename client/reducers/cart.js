const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.item;
      const validID = state.findIndex((item) => item.id === action.id);
      if (validID > -1) {
        return [...state, { id: item.id, name: item.name, quantity: 1, price: item.price }];
      } else {
        return [...state, { id: item.id, name: item.name, quantity: 1, price:item.price }];
      }
    case "REMOVE_FROM_CART":
      return state.filter((e) => action.id != e.id);
    case "UPDATE_QUANTITIES":
      return action.cart;
    default:
      return state;
  }
};

export default cart;