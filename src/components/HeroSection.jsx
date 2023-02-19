import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Offers from "./Offers";
import Panda from "../Assets/images/png/Panda.png";
import Smoke from "../Assets/images/png/Smoke.gif";
import BottomGradient from "../Assets/images/png/BottomGradient.png";
import Categories from "./Categories";
import About from "./About";
import OurRange from "./OurRange";
import ExpressDelivery from "./ExpressDelivery";
import DeliveryService from "./DeliveryService";
import LowPrices from "./LowPrices";
import Features from "./Features";
import MailOrders from "./MailOrders";
import Cannabis from "./Cannabis";
import PotentAlert from "./PotentAlert";
import OurClassification from "./OurClassification";
import PopularItems from "./PopularItems";
import Blogs from "./Blogs";
import Detail from "./Detail";
import StoreHours from "./StoreHours";
import Footer from "./Footer";

const HeroSection = () => {
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <section className="bg_image d-flex flex-column  position-relative min_height">
        <div className="gradient_glow_left"></div>
        <button
          className="go-top-text ff_montserrat"
          onclick={() => topFunction()}
          id="myBtn"
          title="Go to top"
        >
          Top
        </button>
        <Offers />
        <NavBar />
        <img
          src={BottomGradient}
          alt="BottomGradient"
          className="position-absolute bottom-0 end-0 w-75 d-none d-lg-block   z_index_1"
        />
        <img
          src={BottomGradient}
          alt="BottomGradient"
          className="position-absolute bottom-0 end-0 w-100  d-lg-none  z_index_1"
        />

        <Container className="flex-grow-1 d-flex align-items-center position-relative flex-grow-1">
          <Row className="align-items-center text-center text-lg-start my-5">
            <Col lg={6}>
              <h1 className="ff_philosopher fs_8xl fw-bold lh_106">
                Setting a{" "}
                <span className="color_primary_linear d-inline-block">
                  ‘High’
                </span>
                Standard
              </h1>
              <p className="ff_montserrat fs_sm lh_156 mb-0 mt-3">
                We at Purple Panda are passionate about becoming the best online
                weed dispensary Canada has ever seen. We believe in good
                products, fair pricing, and top-notch customer service
              </p>

              <button className=" bg_linear bg_hover text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_md border-0 mt-5">
                SIGN IN
              </button>
            </Col>
            <Col lg={6} className="position-relative">
              <img src={Panda} alt="panda " className="w-100" />
              <img src={Smoke} alt="Smoke " className=" smoke_image " />
            </Col>
          </Row>
        </Container>
      </section>
      <Categories />
      <About />
      <OurRange />
      <ExpressDelivery />
      <DeliveryService />
      <LowPrices />
      <Features />
      <MailOrders />
      <Cannabis />
      <PotentAlert />
      <OurClassification />
      <PopularItems />
      <Blogs />
      <Detail />
      <StoreHours />
      <Footer />
    </>
  );
};

export default HeroSection;
