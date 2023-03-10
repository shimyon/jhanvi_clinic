import React, { Component, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import ReactDOM from "react-dom";
import photos from "./_photos";
import $ from "jquery";

const Gallary = () => {
  const [index, setIndex] = useState(-1);
  const [seltab, setTab] = useState("");
  const [slides, setSlides] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    slidesCall();
  }, [seltab]);

  const slidesCall = () => {
    let imgs = photos.filter((f) => f.folder == seltab || seltab == "");
    let inslide = imgs
      .map(({ src, width, height, images }) => ({
        src,
        width,
        height,
        srcSet: images.map((image) => ({
          src: image.src,
          width: image.width,
          height: image.height,
        })),
      }));
    setImages([...imgs]);
    setSlides([...inslide]);
  };

  const setTabCall = (event, tabname) => {
    $("#gallerybutton .nav-link").removeClass("active");
    $(event.target).addClass("active");
    setTab(tabname);
  };

  return (
    <>
      <section className="banner-area other-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Gallary</h1>
              <Link to="/">Home</Link> <span>|</span>{" "}
              <Link to="/gallary">Gallary</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ul class="nav nav-tabs" id="gallerybutton" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="Departments-tab"
              data-bs-toggle="tab"
              data-bs-target="#Departments"
              type="button"
              role="tab"
              aria-controls="Departments"
              aria-selected="true"
              onClick={(e) => setTabCall(e, "")}
            >
              All Departments
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="GeneralWard-tab"
              data-bs-toggle="tab"
              data-bs-target="#GeneralWard"
              type="button"
              role="tab"
              aria-controls="GeneralWard"
              aria-selected="false"
              onClick={(e) => setTabCall(e, "gw")}
            >
              General Ward
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="semisroom-tab"
              data-bs-toggle="tab"
              data-bs-target="#semisroom"
              type="button"
              role="tab"
              aria-controls="semisroom"
              aria-selected="false"
              onClick={(e) => setTabCall(e, "semisp")}
            >
              Semi Special Room
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="specialroom-tab"
              data-bs-toggle="tab"
              data-bs-target="#specialroom"
              type="button"
              role="tab"
              aria-controls="specialroom"
              aria-selected="false"
              onClick={(e) => setTabCall(e, "sp")}
            >
              Special Room
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="ICU-tab"
              data-bs-toggle="tab"
              data-bs-target="#ICU"
              type="button"
              role="tab"
              aria-controls="ICU"
              aria-selected="false"
              onClick={(e) => setTabCall(e, "icu")}
            >
              ICU
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="Reception-tab"
              data-bs-toggle="tab"
              data-bs-target="#Reception"
              type="button"
              role="tab"
              aria-controls="Reception"
              aria-selected="false"
              onClick={(e) => setTabCall(e, "ra")}
            >
              Reception Area
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="Waiting-tab"
              data-bs-toggle="tab"
              data-bs-target="#Waiting"
              type="button"
              role="tab"
              aria-controls="Waiting"
              aria-selected="false"
              onClick={(e) => setTabCall(e, "wa")}
            >
              {" "}
              Waiting Area
            </button>
          </li>
        </ul>

        <div
          style={{ padding: "5px", marginTop: "15px", marginBottom: "15px" }}
        >
          <PhotoAlbum
            photos={images}
            layout="rows"
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />

          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </section>
    </>
  );
};

export default Gallary;
