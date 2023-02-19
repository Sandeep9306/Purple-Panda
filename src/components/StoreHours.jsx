import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";

const StoreHours = () => {
  return (
    <>
      <section className=" mt-5 text-center position-relative overflow-hidden">
        <div className="gradient_glow_right_2"></div>
        <Container>
          <h2 className="fs_4xl ff_philosopher fw-bold" data-aos="fade-right">
            Store
            <span className="color_primary_linear">Hours</span>
          </h2>
          <div className="d-flex align-items-center justify-content-lg-center">
            <h4
              className="pb-4 border_bottom fw_semibold px-md-5  mx-5 my-4"
              data-aos="fade-right"
            >
              Mon : 10am-8pm
            </h4>
            <h4
              className="pb-4 border_bottom fw_semibold px-md-5  mx-5 my-4"
              data-aos="fade-left"
            >
              Tue : 10am-8pm
            </h4>
          </div>
          <div className="d-flex align-items-center justify-content-lg-center">
            <h4
              className="pb-4 border_bottom fw_semibold px-md-5  mx-5 my-4"
              data-aos="fade-right"
            >
              Wed : 10am-8pm
            </h4>
            <h4
              className="pb-4 border_bottom fw_semibold px-md-5  mx-5 my-4"
              data-aos="fade-left"
            >
              Thu : 10am-8pm
            </h4>
          </div>
          <div className="d-flex align-items-center justify-content-lg-center">
            <h4
              className="pb-4 border_bottom fw_semibold px-md-5  mx-5 my-4"
              data-aos="fade-right"
            >
              Fri : 10am-8pm
            </h4>
            <h4
              className="pb-4 border_bottom fw_semibold px-md-5  mx-5 my-4"
              data-aos="fade-left"
            >
              Sat : 10am-8pm
            </h4>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <h4
              className="pb-4 border_bottom fw_semibold px-md-5  mx-5 my-4"
              data-aos="fade-up"
            >
              Sun : 10am-8pm
            </h4>
          </div>
        </Container>
        <Footer />
      </section>
    </>
  );
};

export default StoreHours;
