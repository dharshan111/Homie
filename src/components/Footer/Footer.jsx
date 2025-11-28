import React from "react";
import './Footer.css'
const Footer = () => {
    return<>
        <section className="footer-wrapper">
            <div className="footer-container paddings innerWidth">
                <div className="footer-image-container flexColStart" data-aos="fade-right">
                    <img src="./logo2.png" alt="" />
                    <span className="secondaryText">Our vision is to make all people</span>
                    <span className="secondaryText">the best place to live for them.</span>
                </div>

                <div className="footer-information-content flexColStart" data-aos="fade-left">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">145 New York, FL 5467, USA</span>
                    <div className="footer-last-content">
                        <p>Property</p>
                        <p>Service</p>
                        <p>Product</p>
                        <p>About US</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Footer;