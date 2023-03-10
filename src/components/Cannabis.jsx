import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlackGold from "../Assets/images/webp/BlackGold.webp";
import TBBS from "../Assets/images/webp/TBBS.webp";
import MedicalCannabis from "../Assets/images/webp/MedicalCannabis.webp";
import PlantLeaf from "../Assets/images/webp/PlantLeaf.webp";
import Microbites from "../Assets/images/webp/Microbites.webp";
import Tilt from "react-parallax-tilt";
import BottomLine from "../Assets/images/webp/BottomGradient.webp";

const Cannabis = () => {
  <Tilt className="parallax-effect"></Tilt>;
  return (
    <>
      <section className="position-relative   d-flex align-items-center about_Background">
        <div className="gradient_glow_right"></div>
        <img
          src={BottomLine}
          alt="BottomLine"
          className="position-absolute w-100 start-0 bottom-0"
        />
        <Container className=" py-5">
          <Row className="align-items-center justify-content-center ">
            <Col lg={8} className="text-center">
              <h4
                className="ff_philosopher fw-bold fs_4xl"
                data-aos="fade-right"
              >
                Cannabis
              </h4>
              <p
                className="fs_sm ff_montserrat lh_156 mt-3 mb-0"
                data-aos="fade-left"
              >
                While we stock all sorts of products to make you feel great,
                we’re experts and lovers of cannabis at heart. We offer a wide
                range of buds each with different highs, flavors, and aromas, so
                you can find the perfect joint-filler, bowl-packer, or pipe
                clearer to suit your tastes
              </p>
            </Col>
            <Col lg={7} className="my-4 ">
              <div className="p-5 bg_blure  position-relative line">
                <h2
                  className="fs_4xl ff_philosopher fw-bold  text-lg-start text-center"
                  data-aos="fade-right"
                >
                  Strain <span className="color_primary_linear">Families</span>
                </h2>
                <p
                  className="fs_sm ff_montserrat lh_156 mt-3 mb-0 text-lg-start text-center"
                  data-aos="fade-right"
                >
                  We stock the three main families of cannabis at Purple Panda,
                  each of which has its own qualities.
                </p>
                <div
                  className="d-flex align-items-center my-3 "
                  data-aos="fade-right"
                >
                  <h4 className="ff_montserrat fw_semibold fs_lg mb-0">
                    Indica:
                  </h4>
                  <p className="fs_sm ff_montserrat lh_156 mt-3 mb-0 ms-3 ">
                    These are your bedtime buds, great for relaxing at the end
                    of the day and for treating stress and anxiety.
                  </p>
                </div>
                <div
                  className="d-flex align-items-center my-3 "
                  data-aos="fade-right"
                >
                  <h4 className="ff_montserrat fw_semibold fs_lg mb-0">
                    Sativa:
                  </h4>
                  <p className="fs_sm ff_montserrat lh_156 mt-3 mb-0 ms-3 ">
                    Smoke up some Sativa for a boost of energy and creativity,
                    perfect for a sunny summer’s day with friends!
                  </p>
                </div>
                <div
                  className="d-flex align-items-center my-3 "
                  data-aos="fade-right"
                >
                  <h4 className="ff_montserrat fw_semibold fs_lg mb-0">
                    Hybrid:
                  </h4>
                  <p className="fs_sm ff_montserrat lh_156 mt-3 mb-0 ms-3 ">
                    Get the best of both worlds with our Hybrid range, bringing
                    together the sensations and flavors of Indica and Sativa for
                    something totally unique.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5} className="my-4">
              <div className="Grid">
                <Tilt className="grid_items1 ">
                  <img src={PlantLeaf} alt="PlantLeaf" className="w-100" />
                </Tilt>
                <Tilt className="grid_items2 ">
                  <img src={BlackGold} alt="BlackGold" className="w-100" />
                </Tilt>
                <Tilt className="grid_items3 ">
                  <img src={TBBS} alt="TBBS" className="w-100" />
                </Tilt>
                <Tilt className="grid_items4 ">
                  <img src={Microbites} alt="Microbites" className="w-100" />
                </Tilt>
                <Tilt className="grid_items5 ">
                  <img
                    src={MedicalCannabis}
                    alt="MedicalCannabis"
                    className="w-100"
                  />
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cannabis;
