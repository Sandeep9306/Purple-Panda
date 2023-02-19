import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../Assets/images/png/Logo.png";
import Search from "../Assets/images/svg/Search.svg";
import Cart from "../Assets/images/svg/Cart.svg";
// import Tilt from "react-parallax-tilt";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navBar, setnavBar] = useState(false);
  if (navBar) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <>
      <section className="my-3">
        <Container>
          <div className="d-flex justify-content-between align-items-center ">
            <a href="" className="nav-link">
              <Link to="/" className="nav-link">
                <img src={Logo} alt="Logo" />
              </Link>
            </a>
            <ul className=" justify-content-between align-items-center mb-0 z_index_1 d-none d-lg-flex">
              <li className="position-relative">
                <Link to="/" className="nav-link">
                  <a
                    href=""
                    className="mx-4 bottom_line ff_montserrat fs_sm  text nav-link "
                  >
                    HOME
                  </a>
                </Link>
              </li>
              <li className="position-relative">
                <a
                  href=""
                  className="mx-4 bottom_line ff_montserrat fs_sm  text nav-link"
                >
                  SHOP
                </a>
              </li>
              <li className="position-relative">
                <a
                  href=""
                  className="mx-4 bottom_line ff_montserrat fs_sm  text nav-link"
                >
                  ABOUT
                </a>
              </li>
              <Link to="/contact" className="nav-link">
                <li className="position-relative">
                  <a
                    href=""
                    className="mx-4 bottom_line ff_montserrat fs_sm  text nav-link"
                  >
                    CONTACT
                  </a>
                </li>
              </Link>
              <li className="position-relative">
                <a href="" className="ms-4 bottom_line text nav-link">
                  FAQ
                </a>
              </li>
              <div className="SearchBar my-auto px-2 py-1 mx-4 d-none d-xl-block">
                <input
                  type="text"
                  placeholder="Search here.."
                  className=" input_field p-1"
                />
                <a href="" className="nav-link d-inline-block">
                  {" "}
                  <img
                    src={Search}
                    alt="Search"
                    className="my-auto icon_size_24 mb-1"
                  />
                </a>
              </div>
              <a href="" className="nav-link  d-xl-none mx-3">
                {" "}
                <img
                  src={Search}
                  alt="Search"
                  className="my-auto icon_size_24 m-4 me-0 ms-xl-0"
                />
              </a>

              <a href="" className="nav-link d-inline-block Cart ">
                <img src={Cart} alt="cart" className="me-4  ms-4 ms-xl-0 " />
              </a>

              <button className=" bg_linear bg_hover text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_md border-0">
                SIGN IN
              </button>
            </ul>

            <div className={navBar ? "view_menu" : "disable_menu"}>
              <ul className=" ff_montserrat fs_sm text-center  flex-column gap-3 position-relative gap-4   text-center align-items-center mb-0 z_index_2 min-vh-100 bg-black w-100 position-absolute top-0 start-0 py-5  d-flex">
                <CgClose
                  className="position-absolute top-0 end-0 m-4 icon_size_24"
                  onClick={() => setnavBar(false)}
                />
                <li className="position-relative">
                  <a
                    href=""
                    className="mx-4 bottom_line ff_montserrat fs_sm   nav-link fw-bold"
                  >
                    HOME
                  </a>
                </li>
                <li className="position-relative">
                  <a
                    href=""
                    className="mx-4 bottom_line ff_montserrat fs_sm  text nav-link"
                  >
                    SHOP
                  </a>
                </li>
                <li className="position-relative">
                  <a
                    href=""
                    className="mx-4 bottom_line ff_montserrat fs_sm  text nav-link"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="position-relative">
                  <a
                    href=""
                    className="mx-4 bottom_line ff_montserrat fs_sm  text nav-link"
                  >
                    CONTACT
                  </a>
                </li>
                <li className="position-relative">
                  <a
                    href=""
                    className="mx-4 bottom_line ff_montserrat fs_sm  text nav-link"
                  >
                    FAQ
                  </a>
                </li>
                {/* <div className="SearchBar my-auto px-2 py-1 mx-4">
                  <input
                    type="text"
                    placeholder="Search here.."
                    className=" input_field p-1"
                  />
                  <a href="" className="nav-link d-inline-block">
                    {" "}
                    <img
                      src={Search}
                      alt="Search"
                      className="my-auto icon_size_24 mb-1"
                    />
                  </a>
                </div> */}
                {/* <a href="" className="nav-link d-inline-block Cart">
                  <img src={Cart} alt="cart" className="me-4  " />
                </a> */}

                <button className=" bg_linear bg_hover text-white ff_montserrat fw-bold rounded-5 px-5 py-3 fs_md border-0">
                  SIGN IN
                </button>
              </ul>
            </div>
            <FaBars className="d-lg-none" onClick={() => setnavBar(true)} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default NavBar;
