import React, { useEffect } from "react";
import Miloinfo from "../../components/Miloinfo";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/MILO.pdf";
import Stats from "../../components/Stats";
import "./about.css";
import Skills from "./Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";

const About = () => {
  useEffect(() => {
    const fadeItems = document.querySelectorAll(".resume__item, .skills");

    const handleScroll = () => {
      fadeItems.forEach((item) => {
        const position = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight * 0.75 && position > 0) {
          item.classList.add("animated");
        } else {
          item.classList.remove("animated");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title chanceaboutme">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal info</h3>
            <ul className="info__list grid">
              <Miloinfo />
            </ul>
            <a href={CV} download="" className="button">
              Download Cv{"  "}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="container">
        <section className="skills container">
          <h3 className="section__subtitle chanceskill subtitle__center animated">
            My Skills
          </h3>
          <div className="skills container grid animated">
            <Skills />
          </div>
        </section>
      </div>

      <section className="resume animated">
        <h3 className="section__subtitle chanceskill subtitle__center animated">
          Experience & Education
        </h3>
        <div className="resume__container grid animated">
          <div className="resume__data animated">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume__data animated">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
