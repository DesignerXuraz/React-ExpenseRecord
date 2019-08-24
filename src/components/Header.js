import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/add">Add Expenses</Link>
        </li>

        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Header;
