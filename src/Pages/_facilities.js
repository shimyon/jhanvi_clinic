import { default as MultiCarousel } from "react-multi-carousel";
import rooms from "./../assests/images/fac/1.jpg";
import Heart from "./../assests/images/fac/2.jpg";
import Nebulizer from "./../assests/images/fac/3.jpg";
import PulseOximeter from "./../assests/images/fac/4.jpg";
import Oxigen from "./../assests/images/fac/5.jpg";
import Mediclaim from "./../assests/images/fac/6.jpg";
import Emergencyimg from "./../assests/images/fac/7.jpg";
import dentalimg from "./../assests/images/fac/8.jpg";

const FacilitiesPart = () => {
  const responsive = {
    rooms: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    Heart: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    Nebulizer: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    PulseOximeter: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section>
        <div className="row" style={{ marginLeft: "276px", Text: "center" }}>
          <div className="col-lg-4 col-md-4">
            <div className="serv-sec font-family">
              <img className="banner-img" src={Emergencyimg} alt="" />
              <h3>24x7 Emergency Services</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="serv-sec font-family">
              <img className="banner-img" src={dentalimg} alt="" />
              <h3>Diabities Care Center</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="department-area">
        <div className="container" style={{marginBottom:"30px"}}>
          <div className="col-lg-6 offset-lg-3">
            <div
              className="section-top text-center font-family"
              style={{ marginTop: "70px" }}
            >
              <h2>Special Facilities</h2>
            </div>
          </div>
          <MultiCarousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3 * 1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"tablet"}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            indicators={false}
            
          >
            <div className="card">
              <img
                src={rooms}
                className="card-img-top img-thumbnail"
                alt="..."
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
              />
              <div className="card-body font-family cardsize">
                <h5 className="card-title "><b style={{color:"black"}}>Rooms</b></h5>
                <p className="card-text">
                  15 Beds Hospital including General Ward, Semi Special AC/ NON
                  AC Rooms & ICU.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={Heart}
                className="card-img-top img-thumbnail"
                alt="..."
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
              />
              <div className="card-body font-family cardsize">
                <h5 className="card-title"><b style={{color:"black"}}>Heart Disease</b></h5>
                <p className="card-text">
                  ECG for Heart Patients.Heart disease describes a range of
                  conditions that affect the heart.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={Nebulizer}
                className="card-img-top img-thumbnail"
                alt="..."
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
              />
              <div className="card-body font-family cardsize">
                <h5 className="card-title"><b style={{color:"black"}}>Nebulizer</b></h5>
                <p className="card-text">
                  A nebulizer is a small machine that turns liquid medicine into
                  a mist that can be easily inhaled.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={PulseOximeter}
                className="card-img-top img-thumbnail"
                alt="..."
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
              />
              <div className="card-body font-family cardsize">
                <h5 className="card-title"><b style={{color:"black"}}>Pulse Oximeter</b></h5>
                <p className="card-text">
                  Pulse oximetry is a test used to measure the oxygen level
                  (oxygen saturation) of the blood
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={Oxigen}
                className="card-img-top img-thumbnail"
                alt="..."
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
              />
              <div className="card-body font-family cardsize">
                <h5 className="card-title"><b style={{color:"black"}}>Oxigen</b></h5>
                <p className="card-text">
                  Oxygen is an essential medicine used to care for patients at
                  all levels of the healthcare system .
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={Mediclaim}
                className="card-img-top img-thumbnail"
                alt="..."
                data-bgposition="center top"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
              />
              <div className="card-body font-family cardsize">
                <h5 className="card-title"><b style={{color:"black"}}>Mediclaim</b></h5>
                <p className="card-text">
                  Calculate Your Health Insurance Premium Instantly & Get Great
                  Benefits On Health Plans.
                </p>
              </div>
            </div>
          </MultiCarousel>
        </div>
      </section>
    </>
  );
};

export default FacilitiesPart;
