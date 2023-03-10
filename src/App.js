// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Gallary from "./Pages/Gallary";
import Contact from "./Pages/Contact";
import Facilities from "./Pages/Facilities";
import Layout from "./Pages/Layout";
import Doctors from "./Pages/Doctors";
// import NoPage from "./Pages/NoPage";
import "./assests/css/style.css";
import "./assests/css/linearicons.css";
import "./assests/css/animate-3.7.0.css";
import "./assests/css/font-awesome-4.7.0.min.css";
import "./assests/css/bootstrap-4.1.3.min.css";
// import './assests/css/font-awesome/css/font-awesome.min.css';

// import "./assests/css/owl-carousel.min.css";
import "./assests/css/jquery.datetimepicker.min.css";

function App() {
  return (
    <div className="App overflow">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="gallary" element={<Gallary />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="doctors" element={<Doctors />} /> */}
            <Route path="facilities" element={<Facilities />} />
          </Route>
          {/* <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />} />
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/departments" element={<Departments />}></Route>
          <Route exact path="/Doctors" element={<Doctors />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
