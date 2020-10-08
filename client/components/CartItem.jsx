import React from "react";
import { connect } from "react-redux";
import data from "../../data/example";
import { removeFromCart, updateCart } from "../actions";

class CartItem extends React.Component {
  render(){
    
    const name = getNameFromId(this.props.item.id);
    const price = getPriceFromId(this.props.item.id);
  return (
      <>
    <tr>
      <td>{name}</td>
      <td>
        <input
          className="update-input"
          defaultValue={this.props.item.quantity}
          onChange={e => {this.props.dispatch(updateCart(this.props.item.id, e.target.value))}}
        />
      </td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => {
            this.props.dispatch(removeFromCart(this.props.item.id));
          }}
        >
          D
        </button>
      </td>
    </tr>
    </>
  );
}};

function getNameFromId(id) {
  const item = data.item.find((item) => item.id === id);
  return item.name;
}

function getPriceFromId(id) {
  const item = data.item.find((item) => item.id === id);
  return item.price;
}

export default connect()(CartItem);
