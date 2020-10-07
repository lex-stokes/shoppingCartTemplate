import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { currentPage, updateQuantities } from "../actions";

const Cart = (props) => {
  function myFunc(total, num) {
    return total + num;
  }
  let prices = props.cart.map((e) => e.price);
  //breaks on zero items in cart
  let total = prices.reduce(myFunc);

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </tbody>
      </table>
      <h4>Total - ${total}</h4>
      <p>
        <a href="#" onClick={() => props.dispatch(currentPage("listing"))}>
          Continue shopping
        </a>
        <button
          onClick={() => {
             console.log("something    ", props.cart);
             let cartTemp = props.cart.map(e => e)
             console.log(cartTemp)
            props.dispatch(updateQuantities(props.cart));
            this.updateQuantities(cartTemp)
          }}
        >
          Update
        </button>
        <button>Checkout</button>
      </p>
    </div>
  );
};

function mapStateToProps(globalState) {
  return {
    cart: globalState.cart,
  };
}

export default connect(mapStateToProps)(Cart);
