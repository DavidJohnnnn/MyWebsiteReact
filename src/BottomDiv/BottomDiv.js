import React from "react";
import "./BottomDiv.css";

const BottomDiv = () => {
  /* Bottom section of the website (used in all pages) */
  return (
    <section className="bottomBox">
      <div className="container-fluid bottomDiv">
        <div className="row">
          <div className="col-lg-6"></div>

          <div className="col-lg-4"></div>

          <div className="col-lg-2">© 2020 David John.</div>
        </div>
      </div>
    </section>
  );
};

export default BottomDiv;
