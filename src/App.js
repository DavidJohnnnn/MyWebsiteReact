// import logo from './logo.svg';
import "./App.css";
import TitleBar from "./Navbar/TitleBar";
import NavbarBrand from "./Navbar/NavbarBrand";
import NavLinkList from "./Navbar/NavLinkList";
import RevealCard from "./RevealCard/RevealCard";
import TrackVisibility from "react-on-screen";

function App() {
  const state = {
    once: true,
    throttleInterval: 150,
    offset: 0,
    partialVisibility: true,
  };
  return (
    <div className="App">
      <TitleBar revealInterval={1200} repeatInterval={12000}>
        <NavbarBrand href="index.html" revealTime={1000} />
        <NavLinkList
          revealInterval={1200}
          revealOffset={500}
          repeatInterval={12000}
        />
      </TitleBar>

      <TrackVisibility {...state}>
        <RevealCard>
          My name is David and this is my website. This website contains some
          useful information about me. I am an Electrical Engineering Graduate
          from the University of Toronto, St. George Campus (BASc) in search of
          programming and web development work. You can explore this website to
          learn more about me. Try my{" "}
          <a href="My-History.html">Relevant Experiences</a> next.
          <br />
          <br />
        </RevealCard>
      </TrackVisibility>
      <TrackVisibility {...state}>
        <RevealCard>
          My name is David and this is my website. This website contains some
          useful information about me. I am an Electrical Engineering Graduate
          from the University of Toronto, St. George Campus (BASc) in search of
          programming and web development work. You can explore this website to
          learn more about me. Try my{" "}
          <a href="My-History.html">Relevant Experiences</a> next.
          <br />
          <br />
        </RevealCard>
      </TrackVisibility>
      <TrackVisibility {...state}>
        <RevealCard>
          My name is David and this is my website. This website contains some
          useful information about me. I am an Electrical Engineering Graduate
          from the University of Toronto, St. George Campus (BASc) in search of
          programming and web development work. You can explore this website to
          learn more about me. Try my{" "}
          <a href="My-History.html">Relevant Experiences</a> next.
          <br />
          <br />
        </RevealCard>
      </TrackVisibility>
      <TrackVisibility {...state}>
        <RevealCard>
          My name is David and this is my website. This website contains some
          useful information about me. I am an Electrical Engineering Graduate
          from the University of Toronto, St. George Campus (BASc) in search of
          programming and web development work. You can explore this website to
          learn more about me. Try my{" "}
          <a href="My-History.html">Relevant Experiences</a> next.
          <br />
          <br />
        </RevealCard>
      </TrackVisibility>

      {/* <!-- JQuery and JavaScript incorporation --> */}
    </div>
  );
}

export default App;
