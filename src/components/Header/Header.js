import React from "react";
import { Navbar } from "react-materialize";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar brand={<NavLink to="/">Logo</NavLink>} alignLinks="right">
      <NavLink to="/">Home</NavLink>
    </Navbar>
  );
};

export default Header;
