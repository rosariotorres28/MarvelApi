import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import home from "../img/home.png";
import marvelComics from "../img/marvelComics.png";
import universoCinematografico from "../img/universoCinematografico.png";
import "./homeStyle.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-background" fluid>
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={10} className="mb-3 py-3">
            <Card className="my-4" bg="black" text="light">
              <Link to={"/character"}>
                <Card.Img src={home} />
              </Link>
              <Card.Body>
                <Card.Text className="link-without-underline">
                  <h5>
                    Marvel está lleno de personajes importantes con historias
                    fascinantes. En este artículo, queremos resaltar algunos que
                    forman parte de este maravilloso multiverso, ya sea por su
                    participación en el MCU, o por su gran popularidad dentro de
                    su mundo originario, los cómics.
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} className="mb-3">
            <Card className="mb-4" bg="black" text="light">
              <Link to={"/comics"}>
                <Card.Img src={marvelComics} />
              </Link>
              <Card.Body>
                <Card.Text>
                  <h5>
                    A todos nos gustan las buenas historias, y los cómics de
                    Marvel tienen casi tantas como personajes. Es por ello que
                    aqui encontrarás una lista sobre algunas de estas
                    fascinantes historias: los cómics.
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} className="mb-3">
            <Card className="mb-5" bg="black">
              <Link to={"/universocinematografico"}>
                <Card.Img src={universoCinematografico} />
              </Link>
              <Card.Body>
                <Card.Text>
                  <h5 className="text-light">
                    El Universo Cinematográfico de Marvel (UCM) se caracteriza
                    por sus batallas, sus logros y sus personajes. Dentro de
                    este articulo podrás ver en orden cronológico las peliculas
                    de este fantástico multiverso.
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;