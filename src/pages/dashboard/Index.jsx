import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsFillPencilFill } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";

const Index = () => {
  const [articles, setArticles] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    displayPlaces();
    displayArticles();
  }, []); // Sans les crochets ça tourne en boucle

  const displayArticles = async () => {
    await axios.get("http://localhost:8000/api/articles").then((res) => {
      setArticles(res.data);
      console.log(res.data);
    });
  };
  const displayPlaces = async () => {
    await axios.get("http://localhost:8000/api/places").then((res) => {
      setPlaces(res.data);
      console.log(res.data);
    });
  };

  return (
    <div>
      <Logo />
      <Menu />

      <section className="dashSection">
        <Row className="gridDash">
          <Col lg={4} className="col1">
            <Card style={{ width: "18rem" }} className="my-3 cardHome">
              <Card.Img
                className="imgCardActu"
                variant="top"
                src="../../../event2.jpg"
              />
              <Card.Body className="bodyCardActu">
                <Card.Title className="titleCardDash">
                  EVENEMENT
                </Card.Title>
                <Link to={`/dashboard/events/add`} className="linkDash">
                  Ajouter un nouvel évènement <BsFillPencilFill className="iconDash"/>
                </Link>
                <br />
                <Link to={`/dashboard/events`} className="linkDash">
                  Liste des évènements <BsCardList className="iconDash"/>
                </Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }} className="my-3 cardHome">
              <Card.Img
                className="imgCardActu"
                variant="top"
                src="../../../event2.jpg"
              />
              <Card.Body className="bodyCardActu">
                <Card.Title className="titleCardDash">
                  TYPE D'EVENEMENT
                </Card.Title>
                <Link to={`/dashboard/eventTypes/add`} className="linkDash">
                  Ajouter un type d'évènement <BsFillPencilFill className="iconDash"/>
                </Link>
                <br />
                <Link to={`/dashboard/eventTypes`} className="linkDash">
                  Liste des types d'évènements <BsCardList className="iconDash"/>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="col2">
            <Card style={{ width: "18rem" }} className="my-3 cardHome">
              <Card.Img
                className="imgCardActu"
                variant="top"
                src="../../../article.png"
              />
              <Card.Body className="bodyCardActu">
                <Card.Title className="titleCardDash">
                  ARTICLE
                </Card.Title>
                <Link to={`/dashboard/articles/add`} className="linkDash">
                  Ajouter un nouvel article <BsFillPencilFill className="iconDash"/>
                </Link>
                <br />
                <Link to={`/dashboard/articles`} className="linkDash">
                  Liste des articles <BsCardList className="iconDash"/>
                </Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="my-3 cardHome">
              <Card.Img
                className="imgCardActu"
                variant="top"
                src="../../../contact2.png"
              />
              <Card.Body className="bodyCardActu">
                <Card.Title className="titleCardDash">
                  CONTACT
                </Card.Title>
                
                
                <Link to={`/dashboard/contacts`} className="linkDash">
                  Liste des messages <BsCardList className="iconDash"/>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="col3">
            <Card style={{ width: "18rem" }} className="my-3 cardHome">
              <Card.Img
                className="imgCardActu"
                variant="top"
                src="../../../place2.png"
              />
              <Card.Body className="bodyCardActu">
                <Card.Title className="titleCardDash">
                  LIEU
                </Card.Title>
                <Link to={`/dashboard/places/add`} className="linkDash">
                  Ajouter un nouveau lieu <BsFillPencilFill className="iconDash"/>
                </Link>
                <br />
                <Link to={`/dashboard/places`} className="linkDash">
                  Liste des lieux <BsCardList className="iconDash"/>
                </Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="my-3 cardHome">
              <Card.Img
                className="imgCardActu"
                variant="top"
                src="../../../place2.png"
              />
              <Card.Body className="bodyCardActu">
                <Card.Title className="titleCardDash">
                  TYPE DE LIEU
                </Card.Title>
                <Link to={`/dashboard/placeTypes/add`} className="linkDash">
                  Ajouter un type de lieu <BsFillPencilFill className="iconDash"/>
                </Link>
                <br />
                <Link to={`/dashboard/placeTypes`} className="linkDash">
                  Liste des types de lieu <BsCardList className="iconDash"/>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <script
        src="https://kit.fontawesome.com/3f4858de7d.js"
        crossorigin="anonymous"
      ></script>
      <Footer />
    </div>
  );
};

export default Index;
