import {combineReducers} from 'redux'
import activePage from './currentPage'
import cart from './cart'

export default combineReducers({
    activePage,
    cart
})