import React from "react";
import Mushrooms from "../Assets/images/png/Mushrooms.png";
import BulkOrders from "../Assets/images/png/BulkOrders.png";
import Extracts from "../Assets/images/png/Extracts.png";
import Vapes from "../Assets/images/png/Vapes.png";
import CBD from "../Assets/images/png/CBD.png";
import Edibles from "../Assets/images/png/Edibles.png";
import Cannabis from "../Assets/images/png/Cannabis.png";
import Container from "react-bootstrap/Container";
import Tilt from "react-parallax-tilt";
import { Col, Row } from "react-bootstrap";

const Categories = () => {
  <Tilt className="parallax-effect"></Tilt>;
  return (
    <>
      <section>
        <Container>
          <div className="row text-center justify-content-xl-between  justify-content-center mt-3">
            <div className="col-auto " data-aos="fade-right">
              
                <img className="w-100 bounce_effect_2" src={Mushrooms} alt="Mushrooms" />
              
              <h5 className="mt-3">Mushrooms</h5>
            </div>
            <div className="col-auto " data-aos="fade-right">
              {" "}
              
                <img className="w-100 bounce_effect_2" src={Extracts} alt="Extracts" />
              
              <h5 className="mt-3">Extracts</h5>
            </div>
            <div className="col-auto " data-aos="fade-right">
              {" "}
              
                <img className="w-100 bounce_effect_2" src={Vapes} alt="Vapes" />
              
              <h5 className="mt-3 ">
                Vapes & <br />
                Accessories{" "}
              </h5>
            </div>
            <div className="col-auto " data-aos="fade-right">
              
                <img className="w-100 bounce_effect_2" src={CBD} alt="CBD" />
              
              <h5 className="mt-3">CBD</h5>
            </div>
            <div className="col-auto " data-aos="fade-right">
              
                <img className="w-100 bounce_effect_2" src={Edibles} alt="Edibles" />
              
              <h5 className="mt-3">Edibles</h5>
            </div>
            <div className="col-auto " data-aos="fade-right">
              {" "}
              
                <img className="w-100 bounce_effect_2" src={Cannabis} alt="Cannabis" />
              
              <h5 className="mt-3">Cannabis</h5>
            </div>
            <div className="col-auto " data-aos="fade-right">
              
                <img className="w-100 bounce_effect_2" src={BulkOrders} alt="BulkOrders" />
              
              <h5 className="mt-3">Bulk Orders</h5>
            </div>
            {/* </Row> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Categories;
