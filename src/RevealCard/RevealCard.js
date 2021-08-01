import React from "react";
//import TrackVisibility from 'react-on-screen';
import "./RevealCard.css";

const miniSection = () => (
  <small>
    This element is something I made myself using some Bootstrap and a lot of
    custom CSS and JavaScript (you can see more if you search the css, js and
    html files for "RevealCard".
    <a
      href="https://github.com/DavidJohnnnn/My-Own-Website"
      className="btn btn-outline-info btn-sm"
      role="button"
      ariaPressed="true"
      onClick="window.open(this.href); return false;"
    >
      Check out the repo
    </a>
    <br />
    <br />
    Press this section again to close.
  </small>
);

const RevealCard = ({ isVisible }) => {
  const reveal = isVisible ? "revealDiv" : "hideDiv";



  return (
    <section className={"RevealCard " + reveal}>
      <div className="container-fluid">
        <div className="verticalLine">
          <div className="vertWipe upVertWipe"></div>
        </div>

        <section className="cardSec">
          <div className="card Title">
            <div className="sideWipe1 leftSideWipe"></div>
            <h5 className="card-title"></h5>
            <div className="sideWipe2 leftSideWipe"></div>
          </div>
          <div className="card Text">
            <i className="fas fa-plus"></i>

            <p className="card-text">
              {props.children}
            </p>
            <miniSection />
          </div>
        </section>

        <div className="verticalLine2">
          <div className="vertWipe downVertWipe"></div>
        </div>
      </div>
    </section>
  );
};

export default RevealCard;
