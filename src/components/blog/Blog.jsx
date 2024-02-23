import React from "react";
import "./blog.css";
import Gbr1 from "../../assets/blog1.svg";
import Gbr2 from "../../assets/blog2.svg";
import Gbr3 from "../../assets/blog3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Post</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Reviews</span>
            </a>
            <a href="#">
              <img src={Gbr1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">5 Best App Development Tool for Your Projects</h3>
            <div className="blog__meta">
              09 February, 2022
              <span></span>
              <span className="blog__dot">.</span>
              <span>Sevyra</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="#">
              <img src={Gbr2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Common Misconceptions About Payment</h3>
            <div className="blog__meta">
              07 February, 2022
              <span></span>
              <span className="blog__dot">.</span>
              <span>Sevyra</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Business</span>
            </a>
            <a href="#">
              <img src={Gbr3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">3 Things to know about startup business</h3>
            <div className="blog__meta">
              05 February, 2022
              <span></span>
              <span className="blog__dot">.</span>
              <span>Sevyra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
