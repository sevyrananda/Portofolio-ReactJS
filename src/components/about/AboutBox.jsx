import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">30</h3>
          <span className="about__title">Project</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-heart"></i>

        <div>
          <h3 className="about__title">20</h3>
          <span className="about__title">Interest</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-plane"></i>

        <div>
          <h3 className="about__title">60</h3>
          <span className="about__title">Experience</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">80</h3>
          <span className="about__title">Connection</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
