import React from "react";
import { useState } from "react";
import "./titleBar.css";

const NavbarBrand = (props) => {
  const [reveal, setReveal] = useState("hiddenPadding offblink");

  setTimeout(function () {
    setReveal("expandPadding onLink");
    // $(".myLogo").removeClass("hiddenPadding offblink").addClass("expandPadding onLink");
  }, props.revealTime);

  return (
    <a className="navbar-brand" href={props.href}>
      <h1 className={"myLogo " + reveal}>
        <span className="title-A">Hi, I'm</span>
        <span className="textAlter">DAVID JOHN</span>
      </h1>
    </a>
  );
};

export default NavbarBrand;
