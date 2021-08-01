import React from "react";

import NavbarBrand from "./NavbarBrand";
import NavLinkList from "./NavLinkList";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light offblink ml-auto">
      <NavbarBrand href="index.html" />
      <NavLinkList />
      <button
        className="navbar-toggler offblink"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={["fas", "fa-angle-double-down"]} />
        {/* <i className="fas fa-angle-double-down" className="togglerImage"></i> */}
      </button>
    </nav>
  );
};
