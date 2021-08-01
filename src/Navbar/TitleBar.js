import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import "./titleBar.css";

const TitleBar = (props) => {

  const [navReveal, setNavRev] = useState("offblink");
  const [togglerReveal, setTogglerRev] = useState("offblink");

  setTimeout(function () {
    setNavRev("onLink");
    setTogglerRev("onLink");
  }, props.revealInterval);

  setInterval(function () {

  }, props.repeatInterval);

  return (
    <section className="titleBar">
      <div className="container-fluid">
        <div className="sideWipe leftSideWipe"></div>
        {/*<!-- line motion animation -->*/}
        <nav
          className={
            "navbar navbar-expand-xl navbar-light bg-light ml-auto " + navReveal
          }
        >
          {props.children}
          <button
            className={"navbar-toggler " + togglerReveal}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faAngleDoubleDown} className="togglerImage" />
          </button>
        </nav>
      </div>
    </section>
  );
};

export default TitleBar;
