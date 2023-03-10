import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Carousel from "react-bootstrap/Carousel";
import rooms from "./../assests/images/fac/1.jpg";
import Heart from "./../assests/images/fac/2.jpg";
import Nebulizer from "./../assests/images/fac/3.jpg";
import PulseOximeter from "./../assests/images/fac/4.jpg";
import Oxigen from "./../assests/images/fac/5.jpg";
import Mediclaim from "./../assests/images/fac/6.jpg";
import Emergencyimg from "./../assests/images/fac/7.jpg";
import dentalimg from "./../assests/images/fac/8.jpg";
import department1 from "./../assests/images/department1.jpg";
import department2 from "./../assests/images/department2.jpg";
import department3 from "./../assests/images/department3.jpg";
import feed1 from "./../assests/images/feed1.jpg";
import feed2 from "./../assests/images/feed2.jpg";
import feed3 from "./../assests/images/feed3.jpg";
import feed4 from "./../assests/images/feed4.jpg";
import feed5 from "./../assests/images/feed5.jpg";
import feed6 from "./../assests/images/feed6.jpg";
import feed7 from "./../assests/images/feed7.jpg";
import feed8 from "./../assests/images/feed8.jpg";
import bannerimg from "./../assests/images/sub-banner.jpg";

const Facilities = () => {
  return (
    <div>
      {/* <section >
      <div className="sub-banner">
        <img className="banner-img" src={bannerimg} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Facilities</h1>
              <Link to="/">Home</Link> <span>|</span>{" "}
              <Link to="/facilities">Facilities</Link>
            </div>
          </div>
        </div>
        </div>
      </section> */}
      <section className="banner-area other-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Facilities</h1>
              <Link to="/">Home</Link> <span>|</span>{" "}
              <Link to="/facilities">Facilities</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="feature-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-feature  text-center item-padding">
                <img src={Emergencyimg} alt="" />
                <h3>24x7 Emergency Services</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-feature  text-center item-padding mt-4 mt-md-0">
                <img src={dentalimg} alt="" />
                <h3>Diabities Care Center</h3>
              </div>
            </div>
            
          </div>
        </div>
      </section> */}
      <section>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="serv-sec">
            <img className="banner-img" src={Emergencyimg} alt="" />
            <h3>24x7 Emergency Services</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="serv-sec">
            <img className="banner-img" src={dentalimg} alt="" />
            <h3>Diabities Care Center</h3>
          </div>
        </div>
      </div>
      </section>
      <section className="department-area section-padding4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-top text-center">
                <h2>Special Facilities</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Carousel indicators={false}>
              <Carousel.Item>
                <img
                  src={rooms}
                  alt=""
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />

                <Carousel.Caption>
                  <h2>Rooms</h2>
                  <h5>
                    15 Beds Hospital including General Ward, Semi Special AC/
                    NON AC Rooms & ICU.
                  </h5>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Heart}
                  alt=""
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />

                <Carousel.Caption>
                  <h3>Heart Disease</h3>
                  <h5>ECG for Heart Patients</h5>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Nebulizer}
                  alt=""
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />

                <Carousel.Caption>
                  <h3>Nebulizer</h3>
                  {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={PulseOximeter}
                  alt=""
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />
                <Carousel.Caption>
                  <h2>Pulse Oximeter</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Oxigen}
                  alt=""
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />
                <Carousel.Caption>
                  <h2>Oxigen</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Mediclaim}
                  alt=""
                  data-bgposition="center top"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                />
                <Carousel.Caption>
                  <h2>Mediclaim</h2>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Facilities;
