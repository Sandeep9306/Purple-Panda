import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Blogs1 from "../Assets/images/png/Blog1.png";
import Blogs2 from "../Assets/images/png/Blog2.png";
import Blogs3 from "../Assets/images/png/Blog3.png";

const Blogs = () => {
  return (
    <>
      <section className="Blog_background py-lg-5 ">
        <Container className="py-lg-5 my-5">
          <h2 className="fs_4xl ff_philosopher fw-bold text-center   ">
            Latest <span className="color_primary_linear">Blogs </span>And
            <span className="color_primary_linear"> News </span>
          </h2>

          <Row className="justify-content-center mt-4">
            <Col md={6} lg={4} className="my-4">
              <div className="p-2 bgBlure">
                <img src={Blogs1} alt="Blogs1" className="w-100" />
                <div className="ff_montserrat px-4">
                  <p className="fs_xxsm mt-3">12 Dec 2022</p>
                  <h4 className="fw_semibold">Integer vulputate</h4>
                  <p>
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis
                  </p>
                  <a href="" className="nav-link mb-2 color_primary_linear">
                    Read More...
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} className="my-4">
              <div className="p-2 bgBlure">
                <img src={Blogs2} alt="Blogs2" className="w-100" />
                <div className="ff_montserrat px-4">
                  <p className="fs_xxsm mt-3">12 Dec 2022</p>
                  <h4 className="fw_semibold">Integer vulputate</h4>
                  <p>
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis.
                  </p>
                  <a href="" className="nav-link mb-2 color_primary_linear">
                    Read More...
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} className="my-4">
              <div className="p-2 bgBlure">
                <img src={Blogs3} alt="Blogs3" className="w-100" />
                <div className="ff_montserrat px-4">
                  <p className="fs_xxsm mt-3">12 Dec 2022</p>
                  <h4 className="fw_semibold">Integer vulputate</h4>
                  <p>
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis.{" "}
                  </p>
                  <a href="" className="nav-link mb-2 color_primary_linear">
                    Read More...
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
