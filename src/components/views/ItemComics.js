import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const ItemComics = ({ comic }) => {
  let imagen = comic.thumbnail.path + "." + comic.thumbnail.extension;

  // Limitar la descripción a 100 caracteres
  const descripcionCorta =
    comic.description && comic.description.length > 100
      ? comic.description.substring(0, 100) + "..."
      : comic.description;

  // Obtener el título del primer personaje
  const tituloPersonaje =
    comic.characters.items.length > 0 ? comic.characters.items[0].name : "";

  return (
    <div className="d-flex justify-content-center">
      <Card className="mt-5 custom-card bg-black" style={{ height: "100%" }}>
        <Card.Img
          variant="top"
          src={imagen}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className="text-light">{tituloPersonaje}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Link to={`/comic/${comic.id}`} className="btn btn-outline-light">
            Ver más
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ItemComics;
