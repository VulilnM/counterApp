import React, { Component } from "react";

class Counter extends Component {
  spanStyle = { color: "white", padding: "3px 10px 3px 10px" };

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps); //prevProps vraca prazan obj
    // console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      //do ajax call here
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {

    console.log("counter rendered");
    return (
      <div style={{ width: "35%", marginLeft: "5px" }}>
        <div className="row">
          <span style={this.spanStyle} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1 col"
          >
            +
          </button>
          <button
            disabled={this.isValueZero()}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1 col"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-1 col"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "col bg m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; // ?????
    return value === 0 ? "Zero" : value;
  }

  isValueZero() {
    return this.props.counter.value === 0 ? true : false;
  }
}

export default Counter;
