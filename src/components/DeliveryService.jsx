import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RightSmallFlower from "../Assets/images/png/RightSmallFlower.png";
import LeftSmallFlower from "../Assets/images/png/LeftSmallFlower.png";

const DeliveryService = () => {
  return (
    <>
      <section className="position-relative my-3">
        <div className="gradient_glow_left"></div>
        <Container className="ff_montserrat ">
          <img
            src={RightSmallFlower}
            alt="RightSmallFlower"
            className="position-absolute d-none d-md-block flower_position"
          />
          <img
            src={LeftSmallFlower}
            alt="RightSmallFlower"
            className="position-absolute d-none d-md-block end-50 bottom-0"
          />
          <Row className="justify-content-center">
            <Col lg={7} className="my-3 my-lg-5 text-center">
              <h4 className="fw_semibold">
                We’re based in both the{" "}
                <span className="color_primary_linear">
                  Greater Toronto Area
                </span>{" "}
                , with our delivery service covering:
              </h4>
              <p className="text_opacity mt-3 mb-0">
                If you’re in any of these cities and need a little pick me up,
                you know where to go!
              </p>
            </Col>
            <Col md={6} lg={6}>
              <div className="d-flex align-items-center justify-content-center border_effect bgBlure p-3 p-lg-5 my-3">
                <div>
                  <div className="my-3 d-flex align-items-center ">
                    <span className="circle"></span>
                    <p className="fs_xl mb-0 ms-3">Mississauga</p>
                  </div>
                  <div className="my-3 d-flex align-items-center ">
                    <span className="circle"></span>
                    <p className="fs_xl mb-0 ms-3">Oakville</p>
                  </div>
                  <div className="my-3 d-flex align-items-center ">
                    <span className="circle"></span>
                    <p className="fs_xl mb-0 ms-3">Brampton</p>
                  </div>
                  <div className="my-3 d-flex align-items-center ">
                    <span className="circle"></span>
                    <p className="fs_xl mb-0 ms-3">Etobicoke</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className="d-flex align-items-center justify-content-center border_effect bgBlure p-3 p-lg-5 my-3">
                <div>
                  <div className="my-3 d-flex align-items-center ">
                    <span className="circle"></span>
                    <p className="fs_xl mb-0 ms-3">Toronto</p>
                  </div>
                  <div className="my-3 d-flex align-items-center ">
                    <span className="circle"></span>
                    <p className="fs_xl mb-0 ms-3">Vaughan</p>
                  </div>
                  <div className="my-3 d-flex align-items-center ">
                    <span className="circle"></span>
                    <p className="fs_xl mb-0 ms-3">Markham</p>
                  </div>
                  <div className="my-3 d-flex align-items-center ">
                    <span className="circle"></span>
                    <p className="fs_xl mb-0 ms-3">Richmond</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DeliveryService;
