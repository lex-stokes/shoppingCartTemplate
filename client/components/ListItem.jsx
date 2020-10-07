import React from "react";
import { connect } from "react-redux";
import { currentPage, addToCart } from "../actions";

const ListItem = (props) => {
  const item = props.item;
  return (
    <div className="item">
      <p className="name">{item.name}</p>
      <p className="description">{item.description}</p>
      <p>
        <span className="country">{item.price}</span>
        <span className="abv">{item.abv} abv</span>
        <a
          href="#"
          className="cart-link"
          onClick={() => {
            props.dispatch(currentPage("cart")) &&
              props.dispatch(addToCart(item));  
          }}
        >
          Add to cart
        </a>
      </p>
    </div>
  );
};

export default connect()(ListItem);