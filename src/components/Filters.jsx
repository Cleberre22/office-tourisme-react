import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Filters = () => {
  // console.log(Filters);

  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(4);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = [
    "Bar",
    "Club de sport",
    "Centre de formation",
    "Salle de concert",
  ];
  
  const [filterMap, setFilterMap] = [data, setData];
// console.log(filterMap);


  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/places")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="filters">
      <ul className="radio-container">
        <input
          className="inputRange"
          type="range"
          min="1"
          max="25"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />

        {radios.map((toto) => (
          <li>
            <input
              type="radio"
              id={toto}
              name="totoInputRadio"
              checked={toto === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={toto}>{toto}</label>
          </li>
        ))}
      </ul>

      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      {/* {selectedRadio} */}
      <ul>
        {data

          .filter((totoFiltre) =>
            totoFiltre.namePlaceType.includes(selectedRadio)
          )
          // .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((place, index) => (
            <Col lg={4} className="listFilterPlace">
              {/* {place.namePlace} */}
              <Card style={{ width: "18rem" }} className="my-3 cardFilterPlace">
                <Card.Img
                  className="imgCardFilter"
                  variant="top"
                  src={`http://localhost:8000/storage/uploads/${place.imagePlace}`}
                />
                <Card.Body className="">
                  <Card.Title className="">{place.namePlace}</Card.Title>
                  <Button className="btnCardActu" variant="primary">
                    En lire plus...
                  </Button>
                </Card.Body>
              </Card>
              {/* <CardFilter /> */}
            </Col>
            // <Col lg={4}><ListePlace /></Col>
            //   <Link to={country.name.common.toLowerCase()}>
            //     <Card key={index} country={country} />
            //   </Link>
          ))}
      </ul>
    </div>
    // </div>
  );
};

export default Filters;
