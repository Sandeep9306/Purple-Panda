import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TwoPanda from "../Assets/images/png/TwoPanda.png";
import SinglePanda from "../Assets/images/png/SinglePanda.png";
import BabyPanda from "../Assets/images/png/BabyPanda.png";
import BottomLine from "../Assets/images/png/BottomGradient.png";
import Tilt from "react-parallax-tilt";
const Detail = () => {
  <Tilt className="parallax-effect"></Tilt>;
  return (
    <>
      <section className="my-5  position-relative text-center Details_background d-flex align-items-center">
        <img
          src={BottomLine}
          alt="BottomLine"
          className="position-absolute w-100 start-0 bottom-0"
        />
        <Container className="z_index_1">
          <Row className="  justify-content-center mt-4 ">
            <Col md={6} lg={4} className="my-3" data-aos="fade-right">
              <Tilt>
                <img className="w-100" src={TwoPanda} alt="TwoPanda" />
              </Tilt>
              <h3 className="ff_philosopher mt-4 fw-bold fs_xl ">
                <span className="color_primary_linear"> 20% Off</span> For First
                Time Customers
              </h3>
            </Col>
            <Col md={6} lg={4} className="my-3" data-aos="fade-up">
              <Tilt>
                <img className="w-100" src={SinglePanda} alt="SinglePanda" />
              </Tilt>
              <h3 className="ff_philosopher mt-4 fw-bold fs_xl ">
                Purple Panda’s
                <span className="color_primary_linear">
                  {" "}
                  Picks Of The week
                </span>{" "}
              </h3>
            </Col>{" "}
            <Col md={6} lg={4} className="my-3" data-aos="fade-left">
              <Tilt>
                <img className="w-100" src={BabyPanda} alt="BabyPanda" />
              </Tilt>
              <h3 className="ff_philosopher mt-4 fw-bold fs_xl ">
                <span className="color_primary_linear"> Collect rewards</span>{" "}
                points every time you purchase
              </h3>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Detail;
