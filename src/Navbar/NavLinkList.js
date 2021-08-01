import React from "react";
import { useState } from "react";
import NavItem from "./NavItem.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./titleBar.css";

const NavLinkList = (props) => {
  const [states, setStates] = useState("firstReveal"); // Three states: firstReveal, intervalHide, intervalReveal

  // L1 - L4 are the links
  // B1 and B2 are the buttons
  const [L1, revealL1] = useState("offblink");
  const [L2, revealL2] = useState("offblink");
  const [L3, revealL3] = useState("offblink");
  const [L4, revealL4] = useState("offblink");
  const [B1, revealB1] = useState("offblink");
  const [B2, revealB2] = useState("offblink");

  /*
  const [linkOne, setLinkRevOne] = useState("offblink");
  const [linkTwo, setLinkRevTwo] = useState("offblink");
  const [linkThree, setLinkRevThree] = useState("offblink");
  const [linkFour, setLinkRevFour] = useState("offblink");

  const [buttonOne, setButtonOne] = useState("offblink");
  const [buttonTwo, setButtonTwo] = useState("offblink");
  */
  const LinkList = [
    <NavItem key={0} isActive="true" href="index.html" revealed={L1}>
      <FontAwesomeIcon icon={faHome} />
      {/*} <i className="fas fa-home"></i> <span className="sr-only">(current)</span>*/}
    </NavItem>,
    <NavItem key={1} href="My-History.html" revealed={L2}>
      MY RELEVANT EXPERIENCES
    </NavItem>,
    <NavItem key={2} href="My-Training.html" revealed={L3}>
      MY EDUCATION & SKILLS
    </NavItem>,
    <NavItem key={3} href="About-Me.html" revealed={L4}>
      ABOUT ME
    </NavItem>,
  ];

  const ButtonList = [
    <NavItem
      key={4}
      isButton="true"
      href="https://github.com/DavidJohnnnn/My-Own-Website"
      revealed={B1}
    >
      <FontAwesomeIcon icon={faGithub} />
    </NavItem>,
    <NavItem
      key={5}
      isButton="true"
      href="https://www.linkedin.com/in/david-j-john/"
      revealed={B2}
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </NavItem>,
  ];

  const revealLink = (setX, i, offset) => {
    setTimeout(function () {
      setX("onLink");
    }, offset + i * props.revealOffset);
  };

  // const linksAnimate = (offset) => {};

  if (states === "firstReveal") {
    revealLink(revealL1, 0, props.revealInterval);
    revealLink(revealL2, 1, props.revealInterval);
    revealLink(revealL3, 2, props.revealInterval);
    revealLink(revealL4, 3, props.revealInterval);
    revealLink(revealB1, 4, props.revealInterval);
    revealLink(revealB2, 5, props.revealInterval);
    setStates("");
  }

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">{LinkList}</ul>
      <ul className="navbar-nav ml-auto">{ButtonList}</ul>
    </div>
  );
};

export default NavLinkList;
