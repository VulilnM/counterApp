import React, { Component } from "react";

//stateless functional component

const NavBar = ({ totalCounters }) => {
  console.log("Navbar rendered");

    let totalCountStyles = { color:"white", padding: " 5px 15px 5px 15px", borderRadius:"10px", marginLeft:"20px"}
  return (
    <nav className="navbar bg-light navbar-light mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span style={totalCountStyles} className="bg bg-pill bg-secondary">Active counters: {totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {}
// }

export default NavBar;
