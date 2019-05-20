import React from "react";
import { Navbar } from "react-materialize";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      className="blue-grey darken-3"
      brand={<NavLink to="/">Hacker News</NavLink>}
      alignLinks="right"
    >
      <NavLink to="/stories/new">New</NavLink>
      <NavLink to="/stories/top-today">Top Today</NavLink>
    </Navbar>
  );
};

export default Header;
