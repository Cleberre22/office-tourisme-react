import React, { useEffect, useState } from "react";

import axios from "axios";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Video from "../components/Video"
import PlaceMap from "../components/PlaceMap";
import Footer from "../components/Footer";

const Home = () => {
  
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

{/* ------------------------- SECTION VIDEO ------------------------- */}

<section className="sectionVideo">
<Video className="video"/>
</section>

{/* ------------------------- SECTION ARTICLE ------------------------- */}

        <Container fluid className="cardContainer py-5">
        <h2 className="titleActu my-5">Actualités</h2>
          <Row  className="justify-content-md-center articleHome">
            {articles.map((article) => (
              <Col lg={3} className="colCard">
                <Card style={{ width: "18rem" }} className="my-3 cardHome">
                  <Card.Img
                    className="imgCardActu"
                    variant="top"
                    src={`http://localhost:8000/storage/uploads/${article.image}`}
                  />
                  <Card.Body className="bodyCardActu">
                    <Card.Title className="titleCardArticleHome">
                      {article.titleArticle}
                    </Card.Title>
                    <Button className="btnCardActu" variant="primary">En lire plus...</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

 




{/* ------------------------- SECTION PLACEMAP ------------------------- */}
      <section className="sectionPlaceMap">
      <Container fluid >
        <h2 className="titlePlaceMap py-5">Découvrir</h2>
          <Row>
            {places.map((place) => (
              <Col lg={12}>
                {place.namePlace}
              </Col>
            ))}
          </Row>
        </Container>
















       <PlaceMap />
      </section>


{/* ------------------------- FOOTER ------------------------- */}
      <Footer />

    </div>
  );
};

export default Home;
