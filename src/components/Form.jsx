import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Phone from "../Assets/images/svg/Phone.svg";
import Mail from "../Assets/images/svg/Mail.svg";
import Contact from "../Assets/images/png/ContactForm.png";
import StoreHours from "./StoreHours";

const Form = () => {
  return (
    <>
      <section>
        <Container className="py-5">
          <Row className="align-items-center justify-content-between">
            <Col lg={5}>
              <img
                src={Contact}
                alt="Contact"
                className="w-100"
                data-aos="fade-right"
              />
            </Col>
            <Col lg={6}>
              <div className="p-5 bgBlure">
                <h3
                  className="ff_philosopher fs_xl    fw-bold"
                  data-aos="fade-left"
                >
                  Feel free to{" "}
                  <span className="color_primary_linear">contact us</span>{" "}
                  anytime you need our help.
                </h3>
                <p className="ff_montserrat " data-aos="fade-left">
                  We usually reply in 24 hours, if there is an urgent need to
                  reach us. please give us a call at the number below
                </p>
                <div
                  className="d-flex align-items-center  justify-content-between mt-4"
                  data-aos="fade-left"
                >
                  <div className="d-flex align-items-center ">
                    <img src={Phone} alt="Phone" />
                    <p className="ff_montserrat fw_semibold mb-0 ms-3">
                      1-888-726-3219
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center "
                    data-aos="fade-left"
                  >
                    <img src={Mail} alt="Mail" className="me-3" />
                    <p className="ff_montserrat fw_semibold mb-0 ">
                      purplepandagta.info@proton.me
                    </p>
                  </div>
                </div>
                <Row>
                  <Col md={6} lg={6} className="mt-3">
                    <input
                      data-aos="zoom-in-up"
                      type="text"
                      placeholder="First name"
                      className="rounded-2 w-100 border_purple bg-transparent p-2 text-white"
                    />
                  </Col>
                  <Col md={6} lg={6} className="mt-3">
                    <input
                      data-aos="zoom-in-up"
                      type="text"
                      placeholder="Last name "
                      className="rounded-2 w-100 border_purple bg-transparent p-2 text-white"
                    />
                  </Col>
                  <Col md={6} lg={6} className="mt-3">
                    <input
                      data-aos="zoom-in-up"
                      type="email"
                      placeholder="Email address "
                      className="rounded-2 w-100 border_purple bg-transparent p-2 text-white"
                    />
                  </Col>
                  <Col md={6} lg={6} className="mt-3">
                    <input
                      data-aos="zoom-in-up"
                      type="number"
                      placeholder="Phone number "
                      className="rounded-2 w-100 border_purple bg-transparent p-2 text-white"
                    />
                  </Col>
                  <Col lg={12} className="mt-3">
                    <textarea
                      data-aos="zoom-in-up"
                      rows={4}
                      type="text"
                      placeholder="Message... "
                      className="rounded-2 w-100 border_purple bg-transparent p-2  text-white "
                    />
                  </Col>
                </Row>
                <button
                  className=" bg_linear bg_hover text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_md border-0 mt-5 "
                  data-aos="fade-left"
                >
                  SIGN IN
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <StoreHours />
      </section>
    </>
  );
};

export default Form;
