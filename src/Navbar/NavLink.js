import React from "react";
import "./titleBar.css";

const NavLink = (props) => {
  if (props.isCircle === true) {
    return (
      <a
        class="btn btn-secondary"
        href={props.href}
        role="button"
        onclick="window.open(this.href); return false;"
      >
        {props.children}
      </a>
    );
  }
  return (
    <a className={"nav-link Links " + props.revealed} href={props.href}>
      {props.children}
    </a>
  );
};

export default NavLink;
