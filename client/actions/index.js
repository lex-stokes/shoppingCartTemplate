export const actionCreatorName = () => {
    return {
      type: 'ACTION_TYPE'
    }
  }
  
  export const currentPage = target => {
    return {
      type: 'NAVIGATE',
      target
    }
  }
  
  export const addToCart = (item) => {
    return {
      type: 'ADD_TO_CART',
      item
    }
  }
  
  export const removeFromCart = id => {
    return {
      type: 'REMOVE_FROM_CART',
      id
    }
  }
  
  export const updateQuantities = cart => {
    return {
      type: 'UPDATE_CARTS',
      cart
    }
  }