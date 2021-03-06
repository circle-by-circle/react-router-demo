import React, { Component } from "react";
import Context from "./context";

class Link extends Component {
  static contextType = Context;
  state = {};
  render() {
    const { to, children } = this.props;
    return (
      <a
        {...this.props}
        onClick={(e) => {
          this.context.history.push(to);
        }}
      >
        {children}
      </a>
    );
  }
}

export default Link;
