import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
const Home = () => {
  return (
    <div className="container">
    <section className="home section grid">
      <img src={Profile} alt="" className="src home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
           I'm MILO  <span className="">So Cool</span>
          </h1>
          <p className="home__description">Introduce yourself "Hello!"</p>
          <Link to="/about" className="button">
            About me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
