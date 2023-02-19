import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../Assets/images/png/FooterLogo.png";

const Footer = () => {
  return (
    <>
      <section className="text-center pt-5 Footer_background position-relative ">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <img src={FooterLogo} alt="FooterLogo" data-aos="zoom-in-up" />

              <p
                className="ff_montserrat fs_sm lh_156 my-4"
                data-aos="fade-left"
              >
                We at Purple Panda are passionate about becoming the best online
                weed dispensary Canada has ever seen. We believe in good
                products, fair pricing, and top-notch customer service
              </p>
              <ul className="d-flex ff_montserrat fs_sm justify-content-center align-items-center mb-0 ">
                <li className="position-relative" data-aos="fade-ap">
                  <a href="" className="mx-4 bottom_line nav-link ">
                    SHOP
                  </a>
                </li>
                <li className="position-relative" data-aos="fade-ap">
                  <a href="" className="mx-4 bottom_line nav-link">
                    ABOUT
                  </a>
                </li>
                <li className="position-relative" data-aos="fade-ap">
                  <a href="" className="mx-4 bottom_line nav-link">
                    CONTACT
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <hr className="border_purple" />
        <p className="ff_montserrat fs_xxsm mb-0 pb-3">
          {" "}
          &#169; copyright2022 purplepanda{" "}
        </p>
      </section>
    </>
  );
};

export default Footer;
