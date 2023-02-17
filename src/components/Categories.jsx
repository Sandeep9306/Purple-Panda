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
          <div className="row text-center justify-content-xl-between  justify-content-center ">
            <div className="col-auto my-3">
              <Tilt>
                <img className="w-100" src={Mushrooms} alt="Mushrooms" />
              </Tilt>
              <h5 className="mt-3">Mushrooms</h5>
            </div>
            <div className="col-auto my-3">
              {" "}
              <Tilt>
                <img className="w-100" src={Extracts} alt="Extracts" />
              </Tilt>
              <h5 className="mt-3">Extracts</h5>
            </div>
            <div className="col-auto my-3">
              {" "}
              <Tilt>
                <img className="w-100" src={Vapes} alt="Vapes" />
              </Tilt>
              <h5 className="mt-3 ">
                Vapes & <br />
                Accessories{" "}
              </h5>
            </div>
            <div className="col-auto my-3">
              <Tilt>
                <img className="w-100" src={CBD} alt="CBD" />
              </Tilt>
              <h5 className="mt-3">CBD</h5>
            </div>
            <div className="col-auto my-3">
              <Tilt>
                <img className="w-100" src={Edibles} alt="Edibles" />
              </Tilt>
              <h5 className="mt-3">Edibles</h5>
            </div>
            <div className="col-auto my-3">
              {" "}
              <Tilt>
                <img className="w-100" src={Cannabis} alt="Cannabis" />
              </Tilt>
              <h5 className="mt-3">Cannabis</h5>
            </div>
            <div className="col-auto my-3">
              <Tilt>
                <img className="w-100" src={BulkOrders} alt="BulkOrders" />
              </Tilt>
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
