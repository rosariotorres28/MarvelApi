import React, { useEffect, useState } from "react";
import ItemComics from "./ItemComics";
import "./comicsStyle.css";
import { Container } from "react-bootstrap";

const Comics = () => {
  const URL =
    "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=9a4ae3eb7341262273b59a9852a1114a&hash=4b256a574ba79bc0abd4c26dc11e82e7";

  const [comics1, setComics1] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
      setComics1(dato.data.results);
      console.log(dato);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comics-container py-4" fluid>
      <Container>
      <h1 className="text-center pt-4 text-black">CÓMICS</h1>
      <hr className="text-dark"/>
        <div className="row align-items-center">
          {comics1.map((comic) => (
            <div className="col-md-4 align-items-center">
              <ItemComics key={comic.id} comic={comic} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Comics;