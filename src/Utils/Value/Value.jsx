import React from "react";
import "./Value.css";

const Value = () => {
  return (
    <>
      <section className="value-wrapper" id="explore">
        <div
          className="contact-head flexColStart innerWidth"
          style={{ paddingInline: "40px" }}
          data-aos="fade-up">
          <span className="orangeText">Explore the world</span>
          <span className="primaryText">With joy</span>
        </div>
        <div className="padding innerWidth flexCenter value-container">
          <div className="flexColStart value-left">
            <div className=" value-title" data-aos="fade-left">
              <div className="circle-value"></div>
              <h1 className="paddings">
                Explore <br />
                The World <br />
                With Us!
              </h1>
            </div>
            <div className="value-content " data-aos="fade-left">
              <div className="flexColStart paddings value-discription">
                <ul>
                  <li className="value-li">
                    <span className="secondaryText">
                      Discover a wide range of homes that match your lifestyle
                      effortlessly.
                    </span>
                  </li>
                  <li className="value-li">
                    <span className="secondaryText">
                      Say goodbye to the stress of property hunting. Start your
                      search today.
                    </span>
                  </li>

                  <li className="value-li">
                    <span className="secondaryText">
                      Explore properties tailored perfectly to your
                      needs—quickly and easily.
                    </span>
                  </li>
                  <li className="value-li">
                    <span className="secondaryText">
                      Leave behind all the hassle of finding the right place.
                      Begin your search now.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* right-side */}
          <div className=" flexCenter value-right" data-aos="fade-right">
            <div className="value-image-container">
              <img src="./hero-image.png" alt="heroimg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
