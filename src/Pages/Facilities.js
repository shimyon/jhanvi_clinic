import React, { Component } from "react";
import FacilitiesPart from "./_facilities";
import { Outlet, Link } from "react-router-dom";
const Facilities = () => {
  return (
    <div>
    <section className="facility-area other-page">
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
      
      <FacilitiesPart />
    </div>
  );
};
export default Facilities;
