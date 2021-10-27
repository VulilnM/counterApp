import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("counters rendered");
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div className="container">
        <button onClick={onReset} className="btn btn-primary btn-small">
          Reset{" "}
        </button>
        {counters.map((counter) => (
              <Counter
                key={counter.id} //internal use only
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter} //sadrzi sve propse kako ih ne bi morali dodavati rucno
              >
              </Counter>
        ))}
        </div>
    );
  }
}

export default Counters;
