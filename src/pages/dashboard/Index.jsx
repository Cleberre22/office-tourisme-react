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
            <h2>dfhgrhg</h2>
          </Col>

          <Col lg={4} className="col2">
            <h2>sfht</h2>
          </Col>

          <Col lg={4} className="col3">
            <h2>fsdsht</h2>
          </Col>
        </Row>

      </section>

     


      <Footer />
    </div>
  );
};

export default Index;
