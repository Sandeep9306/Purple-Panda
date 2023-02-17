import React from "react";
import { Container, Row } from "react-bootstrap";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import Offers from "../components/Offers";

const Contact = () => {
  return (
    <>
      <section className="Contact_background">
        <Offers />
        <NavBar />
        <Container>
          <div className="my-5 text-center py-5">
            <h2 className="fs_4xl ff_philosopher  ">Contact</h2>
            <p className="ff_montserrat mb-5">Home &#62; Contact</p>
          </div>
        </Container>
      </section>
      <Form />
    </>
  );
};

export default Contact;
