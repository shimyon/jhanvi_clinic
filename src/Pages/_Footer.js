import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import icon from "./../assests/images/logo/favicon.png";
import Logo from "./../assests/images/logo/logo.png";
import feed1 from "./../assests/images/feed1.jpg";
import feed2 from "./../assests/images/feed2.jpg";
import feed3 from "./../assests/images/feed3.jpg";
import feed4 from "./../assests/images/feed4.jpg";
import feed5 from "./../assests/images/feed5.jpg";
import feed6 from "./../assests/images/feed6.jpg";
import feed7 from "./../assests/images/feed7.jpg";
import feed8 from "./../assests/images/feed8.jpg";
const FooterLayout = () => {
  return (
    <div>
      {/* Footer Area Starts */}
      <footer className="footer-area section-padding">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3">
                <div className="useful-links single-widget-home mb-5 mb-lg-0">
                  <div className="title">
                    <h3>Jhanvi Nursing Home</h3>
                  </div>
                  <div className="detail">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to={"/facilities"}>Facilities</Link>
                      </li>
                      <li>
                        <Link to={"/Gallery"}>Gallery</Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="single-widget-home mb-5 mb-lg-0">
                  <h3 className="mb-4">newsletter</h3>
                  <p className="mb-4">
                    You can trust us. we only send promo offers, not a single.
                  </p>
                  <form action="#">
                    <input
                      type="email"
                      placeholder="Your email here"
                      onfocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Your email here'"
                      required=""
                    />
                    <button type="submit" className="template-btn">
                      subscribe now
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="get-touch">
                  <div className="title">
                    <h3>GET IN TOUCH</h3>
                  </div>
                  <div className="detail">
                    <div className="get-touch">
                      <ul>
                        <li>
                          <div className="d-flex">
                            <div className="into-icon">
                              <i className="fa fa-home" />
                            </div>
                            <div className="info-text">
                              <h3>Trupt, 2nd and 3rd Floor, </h3>
                              <p>
                                Nr. D-Mart, Waghodia Ring Road, Vadodara 390019
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <i className="icon-phone4" />
                          <div className="d-flex">
                            <div className="into-icon">
                              <i className="fa fa-phone" />
                            </div>
                            <div className="info-text">
                              <a href="telto:98796 67003">90164 02891 / 97146 53003</a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex">
                            <div className="into-icon">
                              <i className="fa fa-envelope-o" />
                            </div>
                            <div className="info-text">
                              <a href="mailto:info@jhanvinursinghome.com">info@jhanvinursinghome.com</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <span>
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2023
                  All rights reserved 
                </span>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="social-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Area End */}
      {/* Javascript */}
    </div>
  );
};

export default FooterLayout;
