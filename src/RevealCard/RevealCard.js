import React from "react";
import { useState } from "react";
import "./RevealCard.css";

const MiniSection = () => {
  const href = "https://github.com/DavidJohnnnn/My-Own-Website";

  const newTab = (e) => {
    window.open(href);
    e.preventDefault();
  };
  return (
    <small>
      This element is something I made myself using some Bootstrap and a lot of
      custom CSS and JavaScript (you can see more if you search the css, js and
      html files for "RevealCard".
      <a
        href={href}
        className="btn btn-outline-info btn-sm"
        role="button"
        ariaPressed="true"
        onClick={newTab}
      >
        Check out the repo
      </a>
      <br />
      <br />
      Press this section again to close.
    </small>
  );
};

const RevealCard = (props) => {
  const [clickedSection, setClickedSection] = useState(false);

  let plusHide = "";
  let textReveal = "";
  const clickHandler = () => {
    if (clickedSection) {
      // if clicked when the text box is open
      setClickedSection(false);
    } else {
      // if we click on the plus
      setClickedSection(true);
    }
  };

  if (clickedSection) {
    plusHide = " plusHide";
    textReveal = " textReveal";
  }

  return (
    <div className="container-fluid">
      <div className="verticalLine">
        <div className="vertWipe upVertWipe"></div>
      </div>

      <section className="cardSec">
        <div className="card Title">
          <div className="sideWipe1 leftSideWipe"></div>
          <h5 className="card-title">{props.title}</h5>
          <div className="sideWipe2 leftSideWipe"></div>
        </div>
        <div className="card Text" onClick={clickHandler}>
          <i className={"fas fa-plus" + plusHide}></i>

          <p className={"card-text" + textReveal}>
            {props.children}
            {(props.miniSec === false) ? "" : <br />}
            {(props.miniSec === false) ? "" : <br />}
            {(props.miniSec === false) ? "" : <MiniSection />}
          </p>
        </div>
      </section>

      <div className="verticalLine2">
        <div className="vertWipe downVertWipe"></div>
      </div>
    </div>
  );
};

export default RevealCard;
