// import logo from './logo.svg';
import "./App.css";
import TitleBar from "./Navbar/TitleBar";
import NavbarBrand from "./Navbar/NavbarBrand";
import NavLinkList from "./Navbar/NavLinkList";
import RevealCard from "./RevealCard/RevealCard";
import RevealContainer from "./RevealCard/RevealContainer";
import TrackVisibility from "react-on-screen";

function App() {
  const state = {
    once: false,
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

      <RevealContainer state={state}>
        <RevealCard title="Purpose">
          My name is David and this is my website. This website contains some
          useful information about me. I am an Electrical Engineering Graduate
          from the University of Toronto, St. George Campus (BASc) in search of
          programming and web development work. You can explore this website to
          learn more about me. Try my{" "}
          <a href="My-History.html">Relevant Experiences</a> next.
          <br />
          <br />
        </RevealCard>
      </RevealContainer>
      <RevealContainer state={state}>
        <RevealCard title="Purpose">
          My name is David and this is my website. This website contains some
          useful information about me. I am an Electrical Engineering Graduate
          from the University of Toronto, St. George Campus (BASc) in search of
          programming and web development work. You can explore this website to
          learn more about me. Try my{" "}
          <a href="My-History.html">Relevant Experiences</a> next.
          <br />
          <br />
        </RevealCard>
      </RevealContainer>
      <RevealContainer state={state}>
        <RevealCard title="Purpose">
          My name is David and this is my website. This website contains some
          useful information about me. I am an Electrical Engineering Graduate
          from the University of Toronto, St. George Campus (BASc) in search of
          programming and web development work. You can explore this website to
          learn more about me. Try my{" "}
          <a href="My-History.html">Relevant Experiences</a> next.
          <br />
          <br />
        </RevealCard>
      </RevealContainer>
      <RevealContainer state={state}>
        <RevealCard title="Purpose">
          My name is David and this is my website. This website contains some
          useful information about me. I am an Electrical Engineering Graduate
          from the University of Toronto, St. George Campus (BASc) in search of
          programming and web development work. You can explore this website to
          learn more about me. Try my{" "}
          <a href="My-History.html">Relevant Experiences</a> next.
          <br />
          <br />
        </RevealCard>
      </RevealContainer>

      {/* <!-- JQuery and JavaScript incorporation --> */}
    </div>
  );
}

export default App;
