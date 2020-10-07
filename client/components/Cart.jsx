import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { currentPage, updateQuantities } from '../actions'

const Cart = (props) => {
  return (
    <div className='cart'>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Quantity</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => {
            return (
              <CartItem key={item.id} item={item}/>
            )
          })}
        </tbody>
      </table>

      <p className='actions'>
        <a href='#' onClick={()=>props.dispatch(currentPage('listing'))}>Continue shopping</a>
        <button onClick={()=>{
          console.log("something")
          props.dispatch(updateQuantities(props.cart))}}
          >Update</button> {/* TODO: implement updates */}
        <button className='button-primary'>Checkout</button>
      </p>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    cart: globalState.cart,
  };
}

export default connect(mapStateToProps)(Cart)
