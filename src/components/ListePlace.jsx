import React, { useEffect, useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";

const ListePlace = () => {

    const [places, setPlaces] = useState([]);
    useEffect(() => {
        displayPlaces();
       
      }, []); // Sans les crochets ça tourne en boucle
    
    
      const displayPlaces = async () => {
        await axios.get("http://localhost:8000/api/places").then((res) => {
          setPlaces(res.data);
          console.log(res.data);
        });
      };

    return (
        <div>
            {places.map((place) => (
                  <Col lg={12}>{place.namePlace}</Col>
                ))}
        </div>
    );
};

export default ListePlace;