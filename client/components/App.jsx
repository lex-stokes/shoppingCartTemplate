import React from "react";
import { connect } from "react-redux";

import Cart from "./Cart";
import List from "./List";

import Data from "../../data/example";

class App extends React.Component {
  state = {
    activePage: "listing",
    cart: [],
  };

  addToCart = (id) => {
    this.setState({
      cart: [
        ...this.state.cart,
        { id, quantity: 1 }, // TODO: increment if already added
      ],
      activePage: "cart",
    });
  };

  keepShopping = () => {
    this.setState({
      activePage: "listing",
    });
  };

  render() {
    const cart = (
      <Cart cart={this.state.cart} keepShopping={this.keepShopping} />
    );
    const beerList = (
      <List item={Data.item} addToCart={this.addToCart} />
    );
    return (
      <div className="app">
        {this.props.activePage === "listing" ? List : cart}
      </div>
    );
  }
}

function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage,
  };
}

export default connect(mapStateToProps)(App);
