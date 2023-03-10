import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import icon from "./../assests/images/logo/favicon.png";
import Logo from "./../assests/images/logo/logo.png";
import banner1 from "./../assests/images/sub-banner.jpg";

import feed1 from "./../assests/images/feed1.jpg";
import feed2 from "./../assests/images/feed2.jpg";
import feed3 from "./../assests/images/feed3.jpg";
import feed4 from "./../assests/images/feed4.jpg";
import feed5 from "./../assests/images/feed5.jpg";
import feed6 from "./../assests/images/feed6.jpg";
import feed7 from "./../assests/images/feed7.jpg";
import feed8 from "./../assests/images/feed8.jpg";
const Contact = () => {
  return (
    <div>
      <section className="banner-area other-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Contact Us</h1>
              <Link to="/">Home</Link> <span>|</span>{" "}
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="map-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14766.976383251078!2d73.2337382!3d22.2876816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc02c3c808db07916!2sJhanvi%20Nursing%20Home!5e0!3m2!1sen!2sin!4v1571301213472!5m2!1sen!2sin"
                width="100%"
                height="460px"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      {/* Map Area End */}
      {/* Contact Form Starts */}
      <section className="contact-form section-padding3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="d-flex">
                <div className="into-icon">
                  <i className="fa fa-home" />
                </div>
                <div className="info-text">
                  <h3>9, Balaji Park Sociey D mart road, </h3>
                  <p>Gurukul Char Rasta, Vadodara, Gujarat 390025</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="into-icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="info-text">
                  <a href="telto:98796 67003" style={{ color: "black" }}>
                    98796 67003
                  </a>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="into-icon">
                  <i className="fa fa-envelope-o" />
                </div>
                <div className="info-text">
                  <a
                    href="mailto:info@jhanvinursinghome.com"
                    style={{ color: "black" }}
                  >
                    info@jhanvinursinghome.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form End */}

      {/* Javascript */}
    </div>
  );
};

export default Contact;
