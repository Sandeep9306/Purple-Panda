import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PopularItem1 from "../Assets/images/png/PopularItem1.png";
import PopularItem2 from "../Assets/images/png/PopularItem2.png";
import PopularItem3 from "../Assets/images/png/PopularItem3.png";

const PopularItems = () => {
  return (
    <>
      <section className="Popular_Items_background my-5 d-flex align-items-center">
        <Container className="py-5 my-lg-4">
          <Row className="justify-content-center my-5">
            <Col lg={6} className="text-center">
              <h2 className="fs_4xl ff_philosopher fw-bold">
                Most <span className="color_primary_linear">Popular </span>Items
              </h2>
              <p className="fs_sm ff_montserrat lh_156 mt-3 mb-0">
                Pellentesque tincidunt fermentum mauris dignissim quam arcu. A
                netus natoque urna vivamus faucibus. Sollicitudin et nisl.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center my-5 ">
            <Col md={6} lg={3} className="my-4">
              <div className="p-2    bgBlure ff_montserrat">
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
            </Col>
            <Col md={6} lg={3} className="my-4">
              <div className="p-2    bgBlure ff_montserrat">
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
            </Col>
            <Col md={6} lg={3} className="my-4">
              <div className="p-2    bgBlure ff_montserrat">
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
            </Col>
            <Col md={6} lg={3} className="my-4">
              <div className="p-2    bgBlure ff_montserrat">
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PopularItems;
