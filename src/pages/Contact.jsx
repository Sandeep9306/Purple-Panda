import React from "react";
import { Container, Row } from "react-bootstrap";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import BottomLine from "../Assets/images/webp/bottomImage.webp";
import Offers from "../components/Offers";

const Contact = () => {
  return (
    <>
      <section className="Contact_background  position-relative overflow-hidden ">
        <img
          src={BottomLine}
          alt="BottomLine"
          className="position-absolute w-100 start-0  bottom-0"
        />
        <Offers />
        <NavBar />
        <Container>
          <div className="my-5 text-center py-5">
            <h2 className="fs_4xl ff_philosopher  " data-aos="fade-down">
              Contact
            </h2>
            <p className="ff_montserrat mb-5" data-aos="fade-up">
              Home &#62; Contact
            </p>
          </div>
        </Container>
      </section>
      <Form />
    </>
  );
};

export default Contact;
