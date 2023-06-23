
import React from "react";
import { Image } from "react-bootstrap";
import logo7 from "../img/logo7.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="bg-black ">
      <div class="container">
        <div class="row mx-2 justify-content-between">
          <div class="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start px-md-0">
            <Link to="/">
              <Image src={logo7} alt="logo de marvel" />
            </Link>
          </div>
          <div class="col-12 col-md-4 py-5">
            <h6 class="text-white"> © TODOS LOS DERECHOS RESERVADOS</h6>
          </div>
          <div class="col-12 col-md-4 py-5">
            <h6 class="text-white">PROGRAMADORA: Maria del Rosario Torres</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;