import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cannabis from "../Assets/images/webp/CannabisLeaves.webp";

const ExpressDelivery = () => {
  return (
    <>
      <section className=" d-flex align-items-center position-relative">
        <div className="gradient_glow_right"></div>
        <Container>
          <Row className="align-items-center text-center text-lg-start">
            <Col lg={6}>
              <img
                src={Cannabis}
                alt="Cannabis"
                className="w-100"
                data-aos="fade-right"
              />
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0 z_index_1">
              <div className="p-3 p-lg-5 bg_blure position-relative line">
                <h2
                  className="fs_4xl ff_philosopher fw-bold"
                  data-aos="fade-left"
                >
                  <span className=" color_primary_linear"> Express </span>
                  Cannabis Delivery
                </h2>
                <p
                  className="fs_sm ff_montserrat lh_156 mt-3 mb-0"
                  data-aos="fade-left"
                >
                  One of the ways that we set ourselves apart from your average
                  dispensary is through our express delivery service. We’ve all
                  been there – work has finished early and you’ve gotten home,
                  but your jar is empty and the nearest dispensary is miles
                  away. With our service, you could have a box of premium
                  pre-rolls, a bag of bodacious buds, or a package of enticing
                  edibles at your door in just three hours!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ExpressDelivery;
