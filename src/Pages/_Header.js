import { Outlet, Link } from "react-router-dom";
// import icon from "./../assests/images/logo/favicon.png";
import Logo from "./../assests/images/logo1.png";
// import feature1 from "./../assests/images/feature1.png";
// import feature2 from "./../assests/images/feature2.png";
// import feature3 from "./../assests/images/feature3.png";
// import feature4 from "./../assests/images/feature4.png";
// import welcome from "./../assests/images/welcome.png";
// import department1 from "./../assests/images/department1.jpg";
// import department2 from "./../assests/images/department2.jpg";
// import department3 from "./../assests/images/department3.jpg";
// import news1 from "./../assests/images/news1.jpg";
// import news2 from "./../assests/images/news2.jpg";
// import news3 from "./../assests/images/news3.jpg";
// import feed1 from "./../assests/images/feed1.jpg";
// import feed2 from "./../assests/images/feed2.jpg";
// import feed3 from "./../assests/images/feed3.jpg";
// import feed4 from "./../assests/images/feed4.jpg";
// import feed5 from "./../assests/images/feed5.jpg";
// import feed6 from "./../assests/images/feed6.jpg";
// import feed7 from "./../assests/images/feed7.jpg";
// import feed8 from "./../assests/images/feed8.jpg";
// import patient1 from "./../assests/images/patient1.png";
// import patient2 from "./../assests/images/patient2.png";
// import doctor1 from "./../assests/images/doctor1.jpg";
// import doctor2 from "./../assests/images/doctor2.jpg";
// import doctor3 from "./../assests/images/doctor3.jpg";
// import doctor4 from "./../assests/images/doctor4.jpg";
// import doctor5 from "./../assests/images/doctor5.jpg";
const styling_text = {color:"#730d62"};
const HeaderLayout = () => {
  return (
    <>
      <header className="header-area">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 d-md-flex">
                <h6 className="mr-3">
                  <a className="fa fa-mobile mr-2 font-family" href="tel:+91 98796 67003" style={styling_text}> call us now! 98796 67003</a>
                </h6>
                <h6 className="mr-3">
                  <a className="fa fa-envelope-o mr-2 font-family" href="mailto:info@jhanvinursinghome.com" style={styling_text} >info@jhanvinursinghome.com</a>
                </h6>
                <h6>
                <b><p style={styling_text} className="font-family">Jhanvi Nursing Home Come to Expect the Best in Town.</p></b>
                  
                </h6>
              </div>
              <div className="col-lg-3">
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/pages/Jhanvi-Nursing-Home/1439597533004602">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
              <div id="logo">
                <a href="/">
                  <img src={Logo} alt="" title />
                </a>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu font-family">
                  <li className="menu-active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/facilities">Facilities</Link>
                  </li>

                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                 
                  <li>
                    <Link to={"/contact"}>contact</Link>
                  </li>
                </ul>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderLayout;
