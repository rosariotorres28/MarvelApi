import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Comic = () => {
  const { id } = useParams();
  const URL =
    "https://gateway.marvel.com:443/v1/public/comics/" +
    id +
    "?ts=1&apikey=9a4ae3eb7341262273b59a9852a1114a&hash=4b256a574ba79bc0abd4c26dc11e82e7";

  const [comic, setComic] = useState({});
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
      setComic(dato.data.results[0]);
      setPersonajes(dato.data.results[0].characters.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <div className="bg-image">
     <div className="mx-3 py-5">
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          <Image  className="pt-3"
            src={
              comic.thumbnail &&
              `${comic.thumbnail.path}.${comic.thumbnail.extension}`
            }
            fluid
          />
        </div>
        <div className="col-12 col-md-8 text-center">
          <h1 className="my-3 text-black">{comic.title}</h1>
          <hr  className="text-black"/>

          <h5 className="text-black">{comic.description}</h5>

          <div className="comics-list-container mb-5">
            <h3 className="text-black">Personajes:</h3>
            <div className="comics-list">
              {personajes.map((personaje) => (
                <Card key={personaje.resourceURI}>
                  <Card.Body>
                    <Card.Title>{personaje.name}</Card.Title>
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

export default Comic;
