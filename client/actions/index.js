export const ADD_TO_CART = 'ADD_TO_CART'
export const NAVIGATE = 'NAVIGATE'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_CART = 'UPDATE_CART'

  export const currentPage = target => {
    return {
      type: NAVIGATE,
      target
    }
  }
  
  export const addToCart = item => {
    return {
      type: ADD_TO_CART,
      item
    }
  }
  
  export const removeFromCart = id => {
    return {
      type: REMOVE_FROM_CART,
      id
    }
  }
  
  export const updateCart = cart => {
    return {
      type: UPDATE_CART,
      cart
    }
  }