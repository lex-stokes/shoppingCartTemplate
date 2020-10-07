import React from "react";
import { connect } from "react-redux";
import data from "../../data/example";
import { removeFromCart } from "../actions";

const CartItem = (props) => {
  
  const name = getNameFromId(props.item.id);
  const price = getPriceFromId(props.item.id);
  return (
      <>
    <tr>
      <td>{name}</td>
      <td>
        <input
          className="update-input"
          defaultValue={props.item.quantity}
          onChange={e => {props.handleChange(props.item.id, e.target.value)}}
        />
      </td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => {
            props.dispatch(removeFromCart(props.item.id));
          }}
        >
          D
        </button>
      </td>
    </tr>
    </>
  );
};

function getNameFromId(id) {
  const item = data.item.find((item) => item.id === id);
  return item.name;
}

function getPriceFromId(id) {
  const item = data.item.find((item) => item.id === id);
  return item.price;
}

export default connect()(CartItem);
