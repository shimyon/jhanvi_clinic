import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./../assests/images/gallery/gw/1.JPG";
import img2 from "./../assests/images/gallery/gw/2.JPG";
import img3 from "./../assests/images/gallery/icu/1.JPG";
import img4 from "./../assests/images/gallery/icu/2.JPG";
import img5 from "./../assests/images/gallery/ra/1.JPG";
import img7 from "./../assests/images/gallery/semisp/1.JPG";
import img8 from "./../assests/images/gallery/semisp/2.JPG";
import img9 from "./../assests/images/gallery/sp/1.JPG";

const GalleryCarosel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <section className="department-area">
            <div className="container" style={{ marginBottom: "30px" }}>
                <div className="col-lg-6 offset-lg-3">
                    <div
                        className="section-top text-center font-family"
                        style={{ marginTop: "70px" }}
                    >
                        <h2>Gallery</h2>
                    </div>
                </div>

                <Slider {...settings}>
                    <div className="col-md-1 galleryBlock" style={{padding:"5px"}} >
                        <a href="gallery">
                            <img className="galleryImg" src={img1} alt="" />
                        </a>
                    </div>
                    <div className="col-md-1 galleryBlock" >
                        <a href="gallery">

                            <img className="galleryImg" src={img2} alt="" />
                        </a>
                    </div>
                    <div className="col-md-1 galleryBlock">
                        <a href="gallery">

                            <img className="galleryImg" src={img3} alt="" />
                        </a>
                    </div>
                    <div className="col-md-1 galleryBlock">
                        <a href="gallery">

                            <img className="galleryImg" src={img4} alt="" />
                        </a>
                    </div>
                    <div className="col-md-1 galleryBlock">
                        <a href="gallery">

                            <img className="galleryImg" src={img5} alt="" />
                        </a>
                    </div>
                    <div className="col-md-1 galleryBlock">
                        <a href="gallery">

                            <img className="galleryImg" src={img7} alt="" />
                        </a>
                    </div>
                    <div className="col-md-1 galleryBlock">
                        <a href="gallery">

                            <img className="galleryImg" src={img8} alt="" />
                        </a>
                    </div>
                    <div className="col-md-1 galleryBlock">
                        <a href="gallery">

                            <img className="galleryImg" src={img9} alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
        </section>
    );
}
export default GalleryCarosel;
