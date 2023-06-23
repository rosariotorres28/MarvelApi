
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../style.css";

const ItemPersonajes = ({ personaje }) => {
  let imagen = personaje.thumbnail.path + "." + personaje.thumbnail.extension;


  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card className="mt-5 custom-card bg-black" style={{ height: "100%" }}>
          <Card.Img
            variant="top"
            src={imagen}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-light">{personaje.name}</Card.Title>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Link to={`/character/${personaje.id}`} className="btn btn-outline-light" >
              Ver más
            </Link>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default ItemPersonajes;