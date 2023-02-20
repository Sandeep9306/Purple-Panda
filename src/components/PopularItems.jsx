import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PopularItem1 from "../Assets/images/webp/PopularItem1.webp";
import PopularItem2 from "../Assets/images/webp/PopularItem2.webp";
import PopularItem3 from "../Assets/images/webp/PopularItem3.webp";
import BottomImage from "../Assets/images/webp/bottomImage.webp";
import Tilt from "react-parallax-tilt";
const PopularItems = () => {
  <Tilt className="parallax-effect"></Tilt>;
  return (
    <>
      <section className="Popular_Items_background position-relative  d-flex align-items-center">
        <img
          src={BottomImage}
          alt="BottomImage"
          className="position-absolute rotate_image start-0 top-0 w-100"
        />
        <img
          src={BottomImage}
          alt="BottomImage"
          className="position-absolute w-100 start-0 bottom-0"
        />
        <Container className=" my-lg-4">
          <Row className="justify-content-center my-5">
            <Col lg={6} className="text-center">
              <h2 className="fs_4xl ff_philosopher fw-bold" data-aos="fade-right">
                Most <span className="color_primary_linear">Popular </span>Items
              </h2>
              <p className="fs_sm ff_montserrat lh_156 mt-3 mb-0" data-aos="fade-left">
                Pellentesque tincidunt fermentum mauris dignissim quam arcu. A
                netus natoque urna vivamus faucibus. Sollicitudin et nisl.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center my-5 ">
            <Col md={6} lg={3} className="my-4">
              <Tilt>
                <div className="p-2  border_effect  bgBlure ff_montserrat" data-aos="zoom-in-up">
                  <img
                    src={PopularItem1}
                    alt="PopularItem1"
                    className="rounded-2 w-100"
                  />
                  <h4 className="fs_lg mt-3">Stoner Patch(500mg)</h4>
                  <h4 className="fs_lg fw-bold color_primary_linear">$20.00</h4>
                  <button className=" bg_linear bg_hover text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_sm border-0 my-3">
                    ADD TO CART
                  </button>
                </div>
              </Tilt>
            </Col>
            <Col md={6} lg={3} className="my-4">
              <Tilt>
                <div className="p-2  border_effect  bgBlure ff_montserrat" data-aos="zoom-in-up">
                  <img
                    src={PopularItem2}
                    alt="PopularItem1"
                    className="rounded-2 w-100"
                  />
                  <h4 className="fs_lg mt-3">Stoner Patch(500mg)</h4>
                  <h4 className="fs_lg fw-bold color_primary_linear">$20.00</h4>
                  <button className=" bg_linear bg_hover text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_sm border-0 my-3">
                    ADD TO CART
                  </button>
                </div>
              </Tilt>
            </Col>
            <Col md={6} lg={3} className="my-4">
              <Tilt>
                <div className="p-2  border_effect  bgBlure ff_montserrat" data-aos="zoom-in-up">
                  <img
                    src={PopularItem3}
                    alt="PopularItem1"
                    className="rounded-2 w-100"
                  />
                  <h4 className="fs_lg mt-3">Stoner Patch(500mg)</h4>
                  <h4 className="fs_lg fw-bold color_primary_linear">$20.00</h4>
                  <button className=" bg_linear bg_hover text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_sm border-0 my-3">
                    ADD TO CART
                  </button>
                </div>
              </Tilt>
            </Col>
            <Col md={6} lg={3} className="my-4">
              <Tilt>
                <div className="p-2  border_effect  bgBlure ff_montserrat" data-aos="zoom-in-up">
                  <img
                    src={PopularItem3}
                    alt="PopularItem1"
                    className="rounded-2 w-100"
                  />
                  <h4 className="fs_lg mt-3">Stoner Patch(500mg)</h4>
                  <h4 className="fs_lg fw-bold color_primary_linear">$20.00</h4>
                  <button className=" bg_linear bg_hover text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_sm border-0 my-3">
                    ADD TO CART
                  </button>
                </div>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PopularItems;
