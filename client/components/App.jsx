import React from "react";
import { connect } from "react-redux";

export class App extends React.Component {
  componentDidMount() {}

  render() {
    console.log(this.props);
    return <h1>Greetings!</h1>;
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps)(App);
