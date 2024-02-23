import React from "react";
import "./home.css";
import Me from "../../assets/avatar.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shape from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Sevyra Nanda Octavianti</h1>
        <span className="home__education">I'm a student of Informatic Engineering</span>

        <HeaderSocials />
        <ScrollDown />
      </div>

      <Shape />
    </section>
  );
};

export default Home;
