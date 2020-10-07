const initialState = 'listing'

const currentPage = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return action.target
    default:
      return state
  }
}

export default currentPage