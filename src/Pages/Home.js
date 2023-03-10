import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactDOM from "react-dom";
import feature1 from "./../assests/images/feature1.png";
import feature2 from "./../assests/images/feature2.png";
import feature3 from "./../assests/images/feature3.png";
import feature4 from "./../assests/images/feature4.png";
import service from "./../assests/images/service.jpg";
import department1 from "./../assests/images/department1.jpg";
import department2 from "./../assests/images/department2.jpg";
import department3 from "./../assests/images/department3.jpg";
import news1 from "./../assests/images/news1.jpg";
import news2 from "./../assests/images/news2.jpg";
import news3 from "./../assests/images/news3.jpg";
import patient1 from "./../assests/images/patient1.png";
import patient2 from "./../assests/images/patient2.png";
import doctor1 from "./../assests/images/doctor1.jpg";
import doctor2 from "./../assests/images/doctor2.jpg";
import doctor3 from "./../assests/images/doctor3.jpg";
import doctor4 from "./../assests/images/doctor4.jpg";
import slide1 from "./../assests/images/slides/slide1.jpg";
import slide2 from "./../assests/images/slides/slide2.jpg";
import slide3 from "./../assests/images/slides/slide3.jpg";
import rooms from "./../assests/images/fac/1.jpg";
import Heart from "./../assests/images/fac/2.jpg";
import Nebulizer from "./../assests/images/fac/3.jpg";
import PulseOximeter from "./../assests/images/fac/4.jpg";
import Oxigen from "./../assests/images/fac/5.jpg";
import Mediclaim from "./../assests/images/fac/6.jpg";
import Emergencyimg from "./../assests/images/fac/7.jpg";
import dentalimg from "./../assests/images/fac/8.jpg";

// const multipleItemCarousel = document.querySelector("#carouselExampleControls");

// if (window.matchMedia("(min-width:576px)").matches) {
//   const carousel = new bootstrap.Carousel(multipleItemCarousel, {
//     interval: false
//   });

//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();

//   var scrollPosition = 0;

//   $(".carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 4) {
//       console.log("next");
//       scrollPosition = scrollPosition + cardWidth;
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//     }
//   });
//   $(".carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       console.log("prev");
//       scrollPosition = scrollPosition - cardWidth;
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//     }
//   });
// } else {
//   $(multipleItemCarousel).addClass("slide");
// }


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
              {/* <Carousel.Caption>
                <div>
                  <div
                    className="tp-caption customin customout rs-parallaxlevel-0"
                    data-x="left"
                    data-y={188}
                    data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                    data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                    data-speed={700}
                    data-start={1200}
                    data-easing="Power3.easeInOut"
                    data-elementdelay="0.1"
                    data-endelementdelay="0.1"
                    style={{ zIndex: 4 }}
                  >
                    <img
                      style={{ borderBottom: "solid 6px #02adc6" }}
                      src="images/slides/transprint-bg.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="tp-caption title-bold tp-resizeme rs-parallaxlevel-0 fade start"
                    data-x={30}
                    data-y={218}
                    data-speed={1000}
                    data-start={1800}
                    data-easing="Power3.easeInOut"
                    data-splitin="none"
                    data-splitout="none"
                    data-elementdelay="0.1"
                    data-endelementdelay="0.1"
                    data-endspeed={300}
                    style={{
                      zIndex: 5,
                      maxWidth: "auto",
                      maxHeight: "auto",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Welcome
                  </div>
                  <div
                    className="tp-caption small-title tp-resizeme rs-parallaxlevel-0 fade start"
                    data-x={30}
                    data-y={255}
                    data-speed={1000}
                    data-start={1800}
                    data-easing="Power3.easeInOut"
                    data-splitin="none"
                    data-splitout="none"
                    data-elementdelay="0.1"
                    data-endelementdelay="0.1"
                    data-endspeed={300}
                    style={{
                      zIndex: 5,
                      maxWidth: "auto",
                      maxHeight: "auto",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Jhanvi Nursing Home
                  </div>
                </div>
              </Carousel.Caption> */}
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
                We are providing cashless facility. cashless facility is provied
                since last 3 year having tie-up with few corporate, major psu
                insurance and many numbers of private insurer including apollo
                munich, chola-ms, aditya birla and many others.
              </p>
              <p>
                We are serving the patinets with due care. we have served
                thousand of patient on opd basis and many patient as indoor
                facility. we treat every patient as our family member.
              </p>
              <p>
                We had opd and indoor data and working on totally sofware based
                system. we ensure in future that we provide same line of
                treatment to our patient and we will improve our facility.
              </p>
              {/* <a href="#" className="template-btn mt-3">
                    learn more
                  </a> */}
            </div>
          </div>
        </div>
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
        <section className="department-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div
                  className="section-top text-center"
                  style={{ marginTop: "60px" }}
                >
                  <h2>Special Facilities</h2>
                </div>
              </div>
            </div>
            <>
              <div
                id="carouselExampleControls"
                className="carousel"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="card">
                      <div className="img-wrapper">
                        <img src={rooms} alt="..." />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Rooms</h5>
                        <p className="card-text">
                          15 Beds Hospital including General Ward, Semi Special
                          AC/ NON AC Rooms & ICU.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card">
                      <div className="img-wrapper">
                        <img src={Heart} alt="..." />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Heart Disease</h5>
                        <p className="card-text">ECG for Heart Patients</p>
                        <a href="#" className="btn btn-primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card">
                      <div className="img-wrapper">
                        <img src={Nebulizer} alt="..." />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Nebulizer</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card">
                      <div className="img-wrapper">
                        <img src={PulseOximeter} alt="..." />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Pulse Oximeter</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card">
                      <div className="img-wrapper">
                        <img src={Oxigen} alt="..." />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Oxigen</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card">
                      <div className="img-wrapper">
                        <img src={Mediclaim} alt="..." />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Mediclaim</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* <p className="mt-5 text-center">
                Get a step-by-step written explanation here:{" "}
                <a
                  href="https://codingyaar.com/bootstrap-carousel-multiple-items-increment-by-1/"
                  target="_blank"
                >
                  Bootstrap 5 carousel multiple items responsive
                </a>{" "}
              </p>
              <p className="mt-5 text-center">
                Get a step-by-step video explanation here:{" "}
                <a href="https://youtu.be/nS_Ht0lT-uQ" target="_blank">
                  Bootstrap 5 carousel multiple items responsive
                </a>{" "}
              </p> */}
            </>
          </div>
        </section>

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
