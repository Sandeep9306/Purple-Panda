import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MushroomsGroup from "../Assets/images/webp/MushroomsGroup.webp";
import Uwell from "../Assets/images/webp/Uwell.webp";
import Plant from "../Assets/images/webp/Plant.webp";
import BottomLine from "../Assets/images/webp/BottomGradient.webp";
import Cart from "../Assets/images/webp/CartPlant.webp";
import CBOBox from "../Assets/images/webp/CBOBox.webp";
import Tilt from "react-parallax-tilt";

const About = () => {
  <Tilt className="parallax-effect"></Tilt>;
  return (
    <>
      <section
        className="  d-flex align-items-center about_Background position-relative"
        id="about"
      >
        <img
          src={BottomLine}
          alt="BottomLine"
          className="position-absolute w-100 start-0 bottom-0"
        />
        <Container className="z_index_1">
          <Row className="align-items-center text-center my-5 text-lg-start">
            <Col lg={6} className="my-3">
              <div className="p-3 p-lg-5  bg_blure position-relative line">
                <h2
                  className="fs_4xl ff_philosopher fw-bold"
                  data-aos="fade-right"
                >
                  About <span className="color_primary_linear">Us</span>
                </h2>
                <p
                  className="fs_sm ff_montserrat lh_156 mt-3 mb-0"
                  data-aos="fade-right"
                >
                  Purple Panda is a Canadian online cannabis dispensary with a
                  passion for good weed and even better customer service. We all
                  remember the days of waiting for scary strangers on street
                  corners, but thankfully those days are over. Now, we’re proud
                  of how we provide an easy, convenient, and user-friendly
                  experience to our clients. We specialize in high-quality
                  cannabis for both recreational and medical purposes, while
                  also making sure that you’re getting the best bud for your
                  buck! Along with all the different strains of cannabis that we
                  stock, you can also get your fill of edibles, vapes, CBD,
                  extracts, and even buy magic mushrooms online from our store.
                </p>
                <button
                  className="border-0 bg_linear text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_md mt-5 bg_hover"
                  data-aos="fade-right"
                >
                  READ MORE
                </button>
              </div>
            </Col>
            <Col lg={6} className="my-3">
              <div className="Grid">
                <Tilt className="grid_items1 ">
                  <img
                    data-aos="fade-left"
                    src={Cart}
                    alt="Cart"
                    className="mx-0 w-100"
                  />
                </Tilt>
                <Tilt className="grid_items2">
                  <img
                    data-aos="fade-left"
                    src={Uwell}
                    alt="Uwell"
                    className="mx-0 w-100"
                  />
                </Tilt>
                <Tilt className="grid_items3">
                  <img
                    data-aos="fade-left"
                    src={MushroomsGroup}
                    alt="MushroomsGroup"
                    className=" w-100"
                  />
                </Tilt>
                <Tilt className="grid_items4">
                  <img
                    data-aos="fade-left"
                    src={Plant}
                    alt="Plant"
                    className="w-100"
                  />
                </Tilt>
                <Tilt className="grid_items5">
                  <img
                    data-aos="fade-left"
                    src={CBOBox}
                    alt="CBOBox"
                    className="w-100"
                  />
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
