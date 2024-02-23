import React, { useState } from "react";
import "./project.css";
import Menu from "./Menu";

const Project = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Project</h2>

      <div className="project__filters">
        <span className="project__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="project__item" onClick={() => filterItem("Creative")}>
          Creative
        </span>
        <span className="project__item" onClick={() => filterItem("Art")}>
          Art
        </span>
        <span className="project__item" onClick={() => filterItem("Design")}>
          Design
        </span>
        <span className="project__item" onClick={() => filterItem("Branding")}>
          Branding
        </span>
      </div>

      <div className="project__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="project__card" key={id}>
              <div className="project__thumbnail">
                <img src={image} alt="" className="project__img" />
                <div className="project__mask"></div>
              </div>

              <span className="project_category">{category}</span>
              <h3 className="project__title">{title}</h3>
              <a href="#" className="project__button">
                <i className="icon-link project__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
