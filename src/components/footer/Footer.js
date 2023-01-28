import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div class=" my-5">
        {/* <!-- Footer --> */}
        <footer
          class="text-center text-lg-start text-dark"
          style={{ backgroundColor: "white" }}
        >
          {/* <!-- Section: Social media --> */}
          <section
            class="d-flex justify-content-between p-4 text-white"
            style={{ backgroundColor: "#0000CD" }}
          >
            {/* <!-- Left --> */}
            <div class="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <a href="" class="text-white me-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-github"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section class="">
            <div class="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div class="c-rw-div">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold">Company name</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <div className="jbi-foot">
                    Saint Finbarr’s College, Akoka, Yaba, Lagos, Nigeria has a
                    rich history and illustrious record of producing leaders in
                    various professional segments both domestically and
                    internationally.
                  </div>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Products</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" class="text-dark">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      News
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Chapters
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" class="text-dark">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Promote Your Business
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      BroadCast
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Members
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Contact Us</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i class="fas fa-home mr-3"></i> SFCOBA Secretariate: Saint
                    Finbarr's College, Akoka, Yaba, Lagos, P.O.Box 7306, Somolu,
                    Lagos
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> sfcoba@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> +2348054378290
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> +234 (818) 518-3179
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div class="text-center p-3" style={{ backgroundColor: "white" }}>
            © 2022 Copyright:
            <a class="text-dark">SFCOBA</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </div>
  );
};

export default Footer;
