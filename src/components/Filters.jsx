import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import ListePlace from "./ListePlace";

const Filters = () => {
  console.log(Filters);
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Bar", "Restaurant", "Cinéma", "Ecole"];

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/places")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="filters">
      {/* <div className="container"> */}
        <ul className="radio-container">
          <input
            type="range"
            min="1"
            max="25"
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
          {/* {radios.map((continent) => (
            <li>
              <input
                type="radio"
                id={continent}
                name="continentRadio"
                checked={continent === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          ))} */}
        </ul>



        {/* {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>
            Annuler la recherche
          </button>
        )} */}



        <ul>
          {data
            .filter((place) => place.namePlace[0].includes(selectedRadio))
            // .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((place, index) => (


                <Col lg={4} className="listFilterPlace">{place.namePlace}</Col>
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
