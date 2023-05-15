import React from "react";
import { Link } from "react-router-dom";
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
                  <h3>Trupt, 2nd and 3rd Floor, </h3>
                  <p>Nr D-Mart, Waghodia Ring Road, Vadodara 390019</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="into-icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="info-text">
                  <a href="telto:98796 67003" style={{ color: "black" }}>
                  90164 02891 / 97146 53003
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
