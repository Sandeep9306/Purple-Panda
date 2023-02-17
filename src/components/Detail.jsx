import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TwoPanda from "../Assets/images/png/TwoPanda.png";
import SinglePanda from "../Assets/images/png/SinglePanda.png";
import BabyPanda from "../Assets/images/png/BabyPanda.png";

const Detail = () => {
  return (
    <>
      <section className=" py-5 text-center Details_background d-flex align-items-center">
        <Container className="my-5 py-5">
          <Row className="my-5 py-5 justify-content-center mt-4">
            <Col md={6} lg={4} className="my-4">
              <img className="w-100" src={TwoPanda} alt="TwoPanda" />
              <h3 className="ff_philosopher mt-4 fw-bold fs_xl ">
                <span className="color_primary_linear"> 20% Off</span> For First
                Time Customers
              </h3>
            </Col>
            <Col md={6} lg={4} className="my-4">
              <img className="w-100" src={SinglePanda} alt="SinglePanda" />
              <h3 className="ff_philosopher mt-4 fw-bold fs_xl ">
                Purple Panda’s
                <span className="color_primary_linear">
                  {" "}
                  Picks Of The week
                </span>{" "}
              </h3>
            </Col>
            <Col md={6} lg={4} className="my-4">
              <img className="w-100" src={BabyPanda} alt="BabyPanda" />
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
