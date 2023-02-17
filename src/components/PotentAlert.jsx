import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Counter from "../Assets/images/png/Counter.gif";
import Cloud2 from "../Assets/images/png/Cloud2.png";
import Cloud1 from "../Assets/images/png/Cloud1.png";
import Cloud3 from "../Assets/images/png/Cloud3.png";
import Cloud4 from "../Assets/images/png/Cloud4.png";
import Cloud5 from "../Assets/images/png/Cloud5.png";
import Cloud6 from "../Assets/images/png/Cloud6.png";

const PotentAlert = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-2">
              <h2 className="fs_4xl ff_philosopher fw-bold">
                Potent Cannabis{" "}
                <span className="color_primary_linear">Alert</span>
              </h2>
              <p className="fs_sm ff_montserrat lh_156 mt-3 mb-0">
                While we stock all sorts of products to make you feel great,
                we’re experts and lovers of cannabis at heart. We offer a wide
                range of buds each with different highs, flavors, and aromas, so
                you can find the perfect joint-filler, bowl-packer, or pipe
                clearer to suit your tastes
              </p>
            </Col>
          </Row>
        </Container>
        <div className="Alert_background text-center py-5 d-flex align-items-center ">
          {/* <img src={Cloud2} alt="Cloud2" className="animateCloud2" />
          <img src={Cloud5} alt="Cloud5" className="animateCloud5" />
          <img src={Cloud1} alt="Cloud1" className="animateCloud1" />
          <img src={Cloud3} alt="Cloud3" className="animateCloud3" />
          <img src={Cloud6} alt="Cloud6" className="animateCloud6" />
          <img src={Cloud4} alt="Cloud4" className="animateCloud4" /> */}
          <Container className="my-5  z_index_1 position-relative">
            <img src={Counter} alt="Counter" className="d-block mx-auto" />

            <button className=" bg_linear bg_hover text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_md border-0 position-absolute  spacebtn">
              Take me to space cannabis
            </button>
          </Container>
        </div>
      </section>
    </>
  );
};

export default PotentAlert;
