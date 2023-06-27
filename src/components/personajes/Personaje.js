import React, { useState, useEffect } from "react";
import { Image, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./personajeStyle.css";

const Personaje = () => {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});
  const [comics, setComics] = useState([]);
  const URL =
    "https://gateway.marvel.com:443/v1/public/characters/" +
    id +
    "?ts=1&apikey=9a4ae3eb7341262273b59a9852a1114a&hash=4b256a574ba79bc0abd4c26dc11e82e7";

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
      setPersonaje(dato.data.results[0]);
      setComics(dato.data.results[0].comics.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="bg-image">
      <div className="mx-3 py-5">
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          {personaje.thumbnail && (
            <Image className="pt-3" src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} fluid />
          )}
        </div>
        <div className="col-12 col-md-8 text-center">
          <h1 className="text-black">{personaje.name}</h1>

          <div className="text-black">
            {personaje.description && <h5>{personaje.description}</h5>}
          </div>

          <div className="comics-list-container mb-5">
            <h3 className="text-black">Comics:</h3>
            <div className="comics-list">
              {comics.map((comic) => (
                <Card key={comic.resourceURI}>
                  <Card.Body>
                    <Card.Title>{comic.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Personaje;
