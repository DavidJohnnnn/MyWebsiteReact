import React from "react";
import TrackVisibility from "react-on-screen";
import "./RevealCard.css";

const RevealContainer = (props) => {
  return (
    <TrackVisibility {...props.state}>
      {({ isVisible }) =>
        isVisible ? (
          <section className={"RevealCard revealDiv"}>
            {props.children}
          </section>
        ) : (
          <section className={"RevealCard hideDiv"}>
            {props.children}
          </section>
        )
      }
    </TrackVisibility>
  );
};

export default RevealContainer;
