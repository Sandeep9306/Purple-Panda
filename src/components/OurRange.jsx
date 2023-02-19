import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RightFlower from "../Assets/images/png/RightFlower.png";
import LeftFlower from "../Assets/images/png/LeftFlower.png";

const OurRange = () => {
  return (
    <>
      <section className=" d-flex align-items-center ">
        <Container className="position-relative my-5">
          <img
            src={LeftFlower}
            alt="LeftFlower"
            className="position-absolute d-none d-lg-block start-0 bottom-0"
          />
          <img
            src={RightFlower}
            alt="RightFlower"
            className="position-absolute d-none d-lg-block end-0  top-0"
          />
          <div className="bgBlure border_effect p-3 p-lg-5 text-center">
            <Row className="align-items-center justify-content-center">
              <Col lg={7}>
                <h2 className="fs_4xl ff_philosopher mb-4 fw-bold">
                  Our <span className="color_primary_linear">Range</span>
                </h2>
                <p className="ff_montserrat fs_sm lh_156 ">
                  We have a variety of different recreational and medicinal
                  items in our range, including cannabis, vapes, edibles, magic
                  mushrooms, extracts, and CBD products, to help you unwind,
                  have fun, and even do some valuable soul searching.
                </p>
                <p className="ff_montserrat fs_sm lh_156 mt-4">
                  Whether you’re looking to order edibles online or browse for
                  your new favorite strain, Purple Panda has got you covered.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurRange;
