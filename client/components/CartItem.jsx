import React from 'react'
import { connect } from 'react-redux'
import Data from '../../data/example'
import { removeFromCart } from '../actions'

const CartItem = (props) => {
    console.log("line 7 cartitem")
  const name = getNameFromId(props.item.id)
  return (
    <tr>
      <td>{name}</td>
      <td>
        <input className='update-input' value={props.item.quantity} />
      </td>
      <td>
        <button>
          <span onClick={()=>{
            props.dispatch(removeFromCart(props.item.id))
            }}/>
        </button>
      </td>
      {/* TODO: implement deletes */}
    </tr>
  )
}

function getNameFromId (id) {
  const item = Data.item.find(item => item.id === id)
  return item.name
}

export default connect()(CartItem)
