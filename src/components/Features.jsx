import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Samples from "../Assets/images/webp/samples.webp";
import Devilery from "../Assets/images/svg/Devilery.svg";
import Packing from "../Assets/images/svg/Packing.svg";
import Premium from "../Assets/images/svg/Premium.svg";
import Reward from "../Assets/images/svg/Reward.svg";
import Email from "../Assets/images/svg/Email.svg";
import Person from "../Assets/images/svg/Person.svg";
import Secure from "../Assets/images/svg/Secure.svg";

const Features = () => {
  return (
    <>
      <section className=" my-5">
        <Container>
          <Row className="ff_montserrat fw_semibold justify-content-lg-between justify-content-around gradient_2">
            <Col lg={5} data-aos="fade-right">
              <img src={Samples} alt="Samples" className="w-100 z_index_1" />
            </Col>
            <Col sm={6} lg={3} data-aos="fade-left">
              <div className="d-flex align-items-center my-4">
                <img className="icon_hover" src={Devilery} alt="Devilery" />
                <p className="ms-3 mb-0">Same Day Delivery</p>
              </div>
              <div className="d-flex align-items-center my-4">
                <img className="icon_hover" src={Packing} alt="Packing" />
                <p className="ms-3 mb-0">Discreet packaging</p>
              </div>
              <div className="d-flex align-items-center my-4">
                <img className="icon_hover" src={Premium} alt="Premium" />
                <p className="ms-3 mb-0">Premium Marijuana Buds</p>
              </div>
              <div className="d-flex align-items-center my-4">
                <img className="icon_hover" src={Reward} alt="Reward" />
                <p className="ms-3 mb-0">Collect Rewards</p>
              </div>
            </Col>
            <Col sm={6} lg={3} data-aos="fade-left">
              <div className="d-flex align-items-center my-4">
                <img className="icon_hover" src={Email} alt="Email" />
                <p className="ms-3 mb-0">Canada Wide Mail Orders</p>
              </div>
              <div className="d-flex align-items-center my-4">
                <img className="icon_hover" src={Person} alt="Person" />
                <p className="ms-3 mb-0">19+</p>
              </div>
              <div className="d-flex align-items-center my-4">
                <img className="icon_hover" src={Secure} alt="Secure" />
                <p className="ms-3 mb-0">Secure Transactions</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
