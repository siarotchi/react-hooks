import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className={"navbar navbar-dark navbar-expand-lg bg-primary"}>
    <div className={"navbar-brand"}>React App</div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/todo" exact>
          ToDo
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink className="nav-link" to="/some">
          some
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/else">
          else
        </NavLink>
      </li> */}
    </ul>
  </nav>
);
