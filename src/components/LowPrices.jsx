import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Mushroom from "../Assets/images/png/Mushroom.png";

const LowPrices = () => {
  return (
    <>
      <section className="my-5 py-5 d-flex align-items-center ">
        <Container className="position-relative  ">
          <div className="bg_blure p-3">
            <Row className="align-items-center text-center text-lg-start pt-5  pb-0  pb-lg-5 column-reverse justify-content-lg-around gradient">
              <Col lg={6} className="my-4 z_index_1 ps-lg-5 ">
                <h2 className="fs_4xl ff_philosopher fw-bold">
                  High
                  <span className=" color_primary_linear"> Thoughts </span>
                  ,Low
                  <span className=" color_primary_linear"> Prices </span>
                </h2>
                <p className="fs_sm ff_montserrat lh_156 mt-3 mb-0">
                  We pride ourselves on supplying premium, top-shelf weed
                  without the top-shelf markups. Some dispensaries will charge
                  an arm and a leg for the newest “flavors”, but we believe in
                  fair, affordable prices for good products at every level of
                  quality and breed.
                </p>
                <button className="border-0 bg_linear text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_md mt-5 bg_hover">
                  GIVE PURPLE PANDA A GO
                </button>
              </Col>
              <Col lg={5} className="z_index_n1 ">
                <img
                  src={Mushroom}
                  alt="Mushroom"
                  className=" translate_middle  "
                />
                {/* <img
                src={Mushroom}
                alt="Mushroom"
                className="d-lg-none mt-4 w-100 "
              /> */}
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LowPrices;
