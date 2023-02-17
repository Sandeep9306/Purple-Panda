import React from "react";
import Gift from "../Assets/images/svg/Gift.svg";

const Offers = () => {
  return (
    <>
      <section className="bg_secondary text-white">
        <div className="container py-3">
          <div className="d-flex align-items-center justify-content-center">
            <img src={Gift} alt="Gift" />
            <p className="ff_montserrat fs_sm  mb-0 mx-2">
              <span className="fw-bold"> Black Friday</span> savings are here
              ,save up to 10% off on coupon code
            </p>
            <a href="" className="ms-2 fw_extrabold color_primary_linear">
              Shop Now
             
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
