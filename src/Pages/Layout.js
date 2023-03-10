import { Outlet, Link } from "react-router-dom";
import icon from "./../assests/images/logo/favicon.png";
import Logo from "./../assests/images/logo/logo.png";
import feature1 from "./../assests/images/feature1.png";
import feature2 from "./../assests/images/feature2.png";
import feature3 from "./../assests/images/feature3.png";
import feature4 from "./../assests/images/feature4.png";
import welcome from "./../assests/images/welcome.png";
import department1 from "./../assests/images/department1.jpg";
import department2 from "./../assests/images/department2.jpg";
import department3 from "./../assests/images/department3.jpg";
import news1 from "./../assests/images/news1.jpg";
import news2 from "./../assests/images/news2.jpg";
import news3 from "./../assests/images/news3.jpg";
import feed1 from "./../assests/images/feed1.jpg";
import feed2 from "./../assests/images/feed2.jpg";
import feed3 from "./../assests/images/feed3.jpg";
import feed4 from "./../assests/images/feed4.jpg";
import feed5 from "./../assests/images/feed5.jpg";
import feed6 from "./../assests/images/feed6.jpg";
import feed7 from "./../assests/images/feed7.jpg";
import feed8 from "./../assests/images/feed8.jpg";
import patient1 from "./../assests/images/patient1.png";
import patient2 from "./../assests/images/patient2.png";
import doctor1 from "./../assests/images/doctor1.jpg";
import doctor2 from "./../assests/images/doctor2.jpg";
import doctor3 from "./../assests/images/doctor3.jpg";
import doctor4 from "./../assests/images/doctor4.jpg";
import HeaderLayout from "./_Header";
import FooterLayout from "./_Footer";
// import doctor5 from "./../assests/images/doctor5.jpg";
const Layout = () => {
  return (
    <div>
      {/* Preloader Starts */}
      {/* <div className="preloader">
          <div className="spinner" />
        </div> */}
      {/* Preloader End */}

      {/* Header Area Starts */}
      <HeaderLayout />
      {/* Header Area End */}

      <Outlet />

      {/* Footer Area Starts */}
      <FooterLayout />
      {/* Footer Area End */}

    </div>
  );
};

export default Layout;
