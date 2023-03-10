import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import service from "./../assests/images/service.jpg";
import slide1 from "./../assests/images/slides/slide1.jpg";
import slide2 from "./../assests/images/slides/slide2.jpg";
import slide3 from "./../assests/images/slides/slide3.jpg";

import FacilitiesPart from "./_facilities";


class Home extends Component {
  render() {
    return (
      <>
        {/* Banner Area Starts */}
        <section>
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                src={slide1}
                alt=""
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                width="100%"
                height="450px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={slide2}
                alt=""
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                width="100%"
                height="450px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={slide3}
                alt=""
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                width="100%"
                height="450px"
              />
            </Carousel.Item>
          </Carousel>
        </section>
        <section>
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="welcome-img">
                <img src={service} alt="" />
              </div>
            </div>
            <div className="col-lg-7 text-left">
              <div className="welcome-text mt-5 mt-lg-0">
                <h2>Welcome to Jhanvi Nursing Home </h2>
                <p>
                  JHANVI NURSING HOME is located in waghodia ring road area of
                  vadodara gujarat.
                </p>
                <p className="pt-3">
                  We are providing cashless facility. cashless facility is
                  provied since last 3 year having tie-up with few corporate,
                  major psu insurance and many numbers of private insurer
                  including apollo munich, chola-ms, aditya birla and many
                  others.
                </p>
                <p>
                  We are serving the patinets with due care. we have served
                  thousand of patient on opd basis and many patient as indoor
                  facility. we treat every patient as our family member.
                </p>
                <p>
                  We had opd and indoor data and working on totally sofware
                  based system. we ensure in future that we provide same line of
                  treatment to our patient and we will improve our facility.
                </p>
                {/* <a href="#" className="template-btn mt-3">
                    learn more
                  </a> */}
              </div>
            </div>
          </div>
        </section>
        <FacilitiesPart />

        {/* Patient Area Starts */}
        {/* Specialist Area Starts */}

        <a>
          <section
            className="hotline-area text-center section-padding"
            style={{ marginTop: "50px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>FOR APPOINTMENT DR. KANU PARMAR</h2>
                  <span>
                    <a href="tel:9714653003" style={{ color: "white" }}>
                      9714653003
                    </a>
                  </span>
                  <p className="pt-3">
                    We provide 24/7 customer support. Please feel free to
                    contact us <br />
                    for emergency case.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </a>
      </>
    );
  }
}

export default Home;
