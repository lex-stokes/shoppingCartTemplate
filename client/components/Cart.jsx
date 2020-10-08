import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { currentPage, updateCart } from "../actions";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart,
    };
  }

  update = (id, quantity) => {
    console.log(id, quantity);
    this.setState({
      cart: this.state.cart.map((item) => {
        if (item.id === id) item.quantity = Number(quantity);
        return item;
      }),
    });
  };
  render() {
    console.log(this.state.cart);
    console.log(this.props, "     24 props");
    let myFunc = (total, num) => {
      return total + num;
    };
      // let prices = this.props.cart.map((e) => e.price);
      // //breaks on zero items in cart
      // let total = prices.reduce(myFunc);
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
            {this.props.cart &&
              this.props.cart.map((item) => {
                return (
                  <CartItem key={item.id} update={this.update} item={item} />
                );
              })}
          </tbody>
        </table>
        <h4>Total - $</h4>
        <p>
          <a
            href="#"
            onClick={() => this.props.dispatch(currentPage("listing"))}
          >
            Continue shopping
          </a>
          <button onClick={() => this.props.updateCart(this.state.cart)}>
            Update
          </button>
          <button>Checkout</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(globalState) {
  console.log(updateCart)
  return {
    cart: globalState.cart,
    //this line isn't working
    updateCart: (cart) => this.props.dispatch(updateCart(cart)),
  };
}

export default connect(mapStateToProps)(Cart);
