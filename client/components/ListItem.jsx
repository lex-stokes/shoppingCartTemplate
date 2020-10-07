import React from "react";
import { connect } from "react-redux";
import { currentPage, addToCart } from "../actions";

const ListItem = (props) => {
  const item = props.item;
  return (
    <div className="item">
      <p className="name">{item.name}</p>
      <img src=""/>
      <p className="description">Description: {item.description}</p>
      <p className="price">Price: ${item.price}</p>
      <p>
       
        <span className="abv">abv: {item.abv}</span>
        <br></br>
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