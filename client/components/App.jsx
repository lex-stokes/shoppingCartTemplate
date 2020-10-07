import React from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import Lists from "./Lists";
import Header from "./Header";
import data from "../../data/example";

export class App extends React.Component {
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
    const List = (
      <Lists item={data.item} addToCart={this.addToCart} />
    );
    return (
      <>
      <div className="app">
        <Header />
        {this.props.activePage === "listing" ? <Lists item={data.item} addToCart={this.addToCart} /> : <Cart cart={this.state.cart} keepShopping={this.keepShopping} />} 
      </div>
      </>
    );
  }
}

function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage,
  };
}

export default connect(mapStateToProps)(App);
