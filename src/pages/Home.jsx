import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/restaurant.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TextTruncate from "react-text-truncate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    displayArticles();
  }, []); // Sans les crochets ça tourne en boucle

  const displayArticles = async () => {
    await axios.get("http://localhost:8000/api/articles").then((res) => {
      setArticles(res.data);
      console.log(res.data);
    });
  };
  return (
    <div>
      <Menu />

      <section className="carouselHomeSection">
        <Carousel className="w-50 carouselHome">
          <Carousel.Item className="itemCarousel">
            <img
              className="d-block imgCarousel img-fluid"
              src="escales.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="itemCarousel">
            <img
              className="d-block imgCarousel img-fluid"
              src="./vip.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="itemCarousel">
            <img
              className="d-block imgCarousel img-fluid"
              src="marchenoc.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="articleHome">
        <h2 className="titleActu">Actualités</h2>

        <div className="container">
          <div className="row">
            {articles.map((article) => (
              <div className="col-lg-3">
                <Card style={{ width: "18rem" }} className="m-3 cardHome">
                  <Card.Img
                    className="imgCardActu"
                    variant="top"
                    src={`http://localhost:8000/storage/uploads/${article.image}`}
                  />
                  <Card.Body className="bodyCardActu">
                    <Card.Title className="titleCardArticleHome">
                      {article.titleArticle}
                    </Card.Title>
                    {/* <Button className="btnCardActu" variant="primary">En lire plus...</Button> */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="placeMap">
        <MapContainer
          center={[47.27227057515833, -2.205370638084083]}
          zoom={13}
          scrollWheelZoom={false}
          className="leaflet-container"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map((place) => (
            <Marker
              key={place.id}
              position={[place.latitudePlace, place.longitudePlace]}
            >
              <Popup>{place.namePlace}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
