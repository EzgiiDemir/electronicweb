import React from "react";
import productThumb2 from "../images/sensors.png";
import { Link } from "react-router-dom";
import "../styles/style.css";

const BannerSection = () => {
  return (
    <section className="pt-5 bg-light ">
      <div className="container">
        <div className="row row-cols-md-2">
          {/* Banner 1 */}
          <div className="mb-4">
  <div
    className="banner-vlad banner-1 position-relative overflow-hidden "
    style={{
      backgroundPosition: "right center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative", // Eklediğimiz satır
      paddingTop: "56.25%", // Eklediğimiz satır
    }}
  >
    {/* <video
      muted
      autoPlay
      loop
      playsInline
      className="col mb-4 w-100 h-100 position-absolute top-0 start-0"
      style={{
        objectFit: "cover",
      }}
    >
      <source src="/ALEMDAR_REKLAM_FİLMİ_2021.mp4" type="video/mp4" />
    </video> */}
    <div className="banner-content p-5 position-absolute text-white">
      <div className="categories mb-3 pb-3 text-primary">Your Category</div>
      <h3 className="banner-title">Your Banner Title</h3>
      <Link
        to="/shop"
        className="d-flex align-items-center nav-link text-primary"
      >
        Shop Collection{" "}
        <svg width="24" height="24">
          <use xlinkHref="#arrow-right"></use>
        </svg>
      </Link>
    </div>
  </div>
</div>

          {/* Banner 2 */}
          <div className="col mb-4">
            <div
              className="banner-vlad banner-2 position-relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg)",
                backgroundPosition: "right center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="row banner-content p-5">
                <div className="content-wrapper col-md-6  border-0" id="bg-color">
                  <div className="categories mb-2 pb-2 text-dark">20% off</div>
                  <h3 className="banner-title text-dark">Arduino Components</h3>
                  <Link
                    to="/shop"
                    className="d-flex align-items-center nav-link text-dark"
                  >
                    Shop Collection{" "}
                    <svg width="24" height="24">
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Banner 3 */}
          <div className="col mb-4">
            <div
              className="banner-vlad banner-3 position-relative overflow-hidden"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                textAlign: "left",
              }}
            >
              <div className="row banner-content p-3">
                <div className="content-wrapper col-md-12">
                  <div className="categories text-dark">
                    <h1 className="banner-title text-primary">Coding Lab</h1>
                  </div>
                  <h5 className="text-dark">Learn based on practice</h5>
                  <p className="text-dark">
                    We provide a great laboratory experience for electronic practice, with an amazing team of engineers and great products.
                  </p>
                  <Link to="/InfoPage" className="btn btn-light">
                    <i className="pi pi-arrow-right"></i> Check more details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Banner 4 */}
          <div className="col mb-4">
            <div
              className="banner-vlad banner-4 position-relative overflow-hidden "
              style={{
                backgroundImage: `url(https://img.lazcdn.com/g/p/8c111760ad8742bb9244906c45f5b60b.jpg_960x960q80.jpg_.webp)`,

                backgroundPosition: "right bottom",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="row banner-content p-5">
                <div className="content-wrapper col-md-6 border-0 " id="bg-color" >
                  <div className="categories mb-3 pb-3 text-dark">15% off</div>
                  <h3 className="item-title text-dark">Sensors &amp; modules</h3>
                  <Link
                    to="/shop"
                    className="d-flex align-items-center nav-link text-dark"
                  >
                    Shop Collection{" "}
                    <svg width="24" height="24">
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
