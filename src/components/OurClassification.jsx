import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Star from "../Assets/images/svg/star.svg";
import ClassificationPlant from "../Assets/images/png/ClassificationPlant.png";

const OurClassification = () => {
  return (
    <>
      <section className="Classification_background  position-relative  py-5 d-flex align-items-center">
        <div className="gradient_glow_left"></div>
        <img
          src={ClassificationPlant}
          alt="ClassificationPlant"
          className="position-absolute end-50 "
        />
        <Container>
          <Row>
            <Col lg={6} className="">
              <div className="p-3 p-md-5 bg_blure  border_effect position-relative border_purple">
                <h2
                  className="fs_4xl ff_philosopher fw-bold"
                  data-aos="fade-right"
                >
                  Our
                  <span className="color_primary_linear"> Classifications</span>
                </h2>
                <p
                  className="fs_sm ff_montserrat lh_156 mt-3 mb-0"
                  data-aos="fade-right"
                >
                  We’re proud of all our weed, but we still classify it based on
                  quality and price, with our levels classed at:
                </p>
                <div className="ff_montserrat  my-4 " data-aos="fade-right">
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <h4 className="fw_semibold my-2 mb-0">2-Star</h4>
                  <p>Very affordable , entry level quality</p>
                </div>
                <div className="ff_montserrat  my-4 " data-aos="fade-right">
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <h4 className="fw_semibold my-2 mb-0">3-Star</h4>
                  <p>Very affordable , entry level quality</p>
                </div>
                <div className="ff_montserrat  my-4 " data-aos="fade-right">
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <h4 className="fw_semibold my-2 mb-0">4-Star</h4>
                  <p>Very affordable , entry level quality</p>
                </div>
                <div className="ff_montserrat  my-4 " data-aos="fade-right">
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <img className="bounce_effect_2 me-2" src={Star} alt="Star" />
                  <h4 className="fw_semibold my-2 mb-0">5-Star</h4>
                  <p>Very affordable , entry level quality</p>
                </div>
                <button
                  className="border-0 bg_linear text-white ff_montserrat fw-bold rounded-5 px-5 py-3 bg_hover fs_md mt-3 "
                  data-aos="fade-right"
                >
                  TRY PURPLE PANDA TODAY
                </button>
              </div>
            </Col>
            <Col lg={6} className="my-4">
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurClassification;
