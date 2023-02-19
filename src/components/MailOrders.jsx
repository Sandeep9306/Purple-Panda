import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DetailCheck from "../Assets/images/svg/DetailCheck.svg";
import CartCheck from "../Assets/images/svg/CartCheck.svg";
import Payment from "../Assets/images/svg/Payment.svg";
import NumberOne from "../Assets/images/svg/NumberOne.svg";
import NumberTwo from "../Assets/images/svg/NumberTwo.svg";
import NumberThree from "../Assets/images/svg/NumberThree.svg";
import BottomLine from "../Assets/images/png/BottomGradient.png";

const MailOrders = () => {
  return (
    <>
      <section className="mailOrder_background d-flex align-items-center position-relative mb-5 pt-lg-5">
        <img
          src={BottomLine}
          alt="BottomLine"
          className="position-absolute w-100 start-0 bottom-0"
        />
        <Container>
          <Row className="justify-content-center">
            <Col lg={9} className="text-center">
              <h2 className="fs_4xl ff_philosopher fw-bold" data-aos="fade-right">
                Canada Wide{" "}
                <span className="color_primary_linear"> Mail Orders</span>
              </h2>
              <p className="ff_montserrat fs_sm lh_156 " data-aos="fade-left">
                Purple Panda offers discreet mail orders to all provinces in
                Canada, we have new list of products everyday to serve your
                needs whether its recreational or medinical use. We ship the
                next business day from Monday-Thursdays, EMT payment is required
                for all mail orders
              </p>
            </Col>
            <Col sm={11} md={6} lg={4} className="my-5 pt-5">
              <div  data-aos="fade-right"className="bgBlure rounded-5 gradient_circle p-4 position-relative border_effect bounce_effect">
                <img
                  src={NumberOne}
                  alt="NumberOne"
                  className="position-absolute    numberPosition"
                />
                <img
                  src={DetailCheck}
                  alt="DetailCheck"
                  className="pt-5 mt-4 pb-4"
                />
                <p className="fs_sm lh_156 ff_montserrat mt-3 text_opacity">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </Col>
            <Col sm={11} md={6} lg={4} className="my-5 pt-5">
              <div  data-aos="fade-up"className="bgBlure rounded-5 gradient_circle p-4 position-relative border_effect bounce_effect">
                <img
                  src={NumberTwo}
                  alt="NumberTwo"
                  className="position-absolute   numberPosition"
                />
                <img
                  src={CartCheck}
                  alt="CartCheck"
                  className="pt-5 mt-4 pb-4"
                />
                <p className="fs_sm lh_156 ff_montserrat mt-3 text_opacity">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </Col>
            <Col sm={11} md={6} lg={4} className="mt-5 pt-5">
              <div  data-aos="fade-left"className="bgBlure rounded-5 gradient_circle p-4 position-relative border_effect bounce_effect">
                <img
                  src={NumberThree}
                  alt="NumberThree"
                  className="position-absolute   numberPosition"
                />
                <img src={Payment} alt="Payment" className="pt-5 mt-4 pb-4" />
                <p className="fs_sm lh_156 ff_montserrat mt-3 text_opacity">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MailOrders;
