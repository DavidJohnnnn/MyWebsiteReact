import React from "react";
import "./titleBar.css";


const NavItem = (props) => {
  let isActive = "";
  if (props.isActive === "true") {
    isActive = " active";
  }

  if (props.isButton === "true") {
    return (
      <li className={"nav-item " + props.revealed}>
        <a
          className="btn btn-secondary"
          href={props.href}
          role="button"
          onClick={"window.open(props.href)"}
        >
          {props.children}
        </a>
      </li>
    );
  }
  return (
    <li className={"nav-item " + isActive + " " + props.revealed}>
      <a className={"nav-link Links " + props.revealed} href={props.href}>
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
