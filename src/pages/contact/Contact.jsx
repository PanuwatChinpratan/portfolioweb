import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c4shxib",
        "template_r5jopnq",
        form.current,
        "fG2k92bbkYVqVR7DO"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED");
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get in <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">MILO</h3>
          <p className="contact__description">
          If you contact me I will get back to you as soon as possible! Thank you.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Email</span>
                <h4 className="info__desc">panuwatchinpratan@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">+66 945677543</h4>
              </div>
            </div>
            <div className="contact__socials">
              <a
                href="https://www.facebook.com/Madeverypersecond"
                className="contact__social-link"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/madeverypersecond/"
                className="contact__social-link"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your name"
                className="form__control"
                id="user_name"
                name="user_name"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                id="user_email"
                name="user_email"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your subject"
                className="form__control"
                id="subject"
                name="subject"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control"
              id="message"
              name="message"
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
