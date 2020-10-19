import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = (props) => {
  const { title } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-success">
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contacts/add">
              Add
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/About">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: "My title",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
