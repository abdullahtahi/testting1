import React from "react";
import Dummy from "../assest/Dummy.png";
import p from "../assest/p.png";
import Slider from "react-slick";
import "./Testing.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testing() {
  return (
    // <div className="carousel-container">
    //   <img src={Dummy} alt="Fixed picture" className="mobile-phone" />
    //   <Slider dots infinite speed={500} slidesToShow={1} className="carousel">
    //     <img src={p} />
    //     <img src={p} />
    //     <img src={p} />
    //   </Slider>
    //   <div id="myCarousel" class="carousel slide" data-ride="carousel">
    //     <a
    //       class="carousel-control-prev"
    //       href="#myCarousel"
    //       role="button"
    //       data-slide="prev"
    //     >
    //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span class="sr-only">Previous</span>
    //     </a>
    //     <a
    //       class="carousel-control-next"
    //       href="#myCarousel"
    //       role="button"
    //       data-slide="next"
    //     >
    //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span class="sr-only">Next</span>
    //     </a>

    //     <ul class="carousel-inner">
    //       <li class="active">
    //         <img src="image1.jpg" alt="Image 1" />
    //       </li>
    //       <li>
    //         <img src="image2.jpg" alt="Image 2" />
    //       </li>
    //       <li>
    //         <img src="image3.jpg" alt="Image 3" />
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Code with Abdullah
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Testing home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Linking Testing
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Drop testing down
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action Testing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Test Action action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else Testing here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled Testing
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search my Testing
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
