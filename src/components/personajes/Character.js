import React, { useState, useEffect } from "react";
import ItemPersonajes from "./ItemPersonajes";
import "./characterStyle.css";
import { Container } from "react-bootstrap";

const Character = () => {
  const URL =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9a4ae3eb7341262273b59a9852a1114a&hash=4b256a574ba79bc0abd4c26dc11e82e7";

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
      setCharacters(dato.data.results);
      console.log(dato);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="character-container py-4" fluid>
      <Container>
      <h1 className="text-center pt-4 text-black">CHARACTERS</h1>
      <hr/>
        <div className="row align-items-center">
          {characters.map((personaje) => (
            <div className="col-md-4 align-items-center" key={personaje.id}>
              <ItemPersonajes personaje={personaje} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Character;