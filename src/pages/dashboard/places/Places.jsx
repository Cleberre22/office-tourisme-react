import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../../components/Menu";
import Footer from "../../../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [placeTypes, setPlaceTypes] = useState([]);

  useEffect(() => {
    displayPlaces();
    displayPlaceTypes();
  }, []); // Sans les crochets ça tourne en boucle

  const displayPlaces = async () => {
    await axios.get("http://localhost:8000/api/places").then((res) => {
      setPlaces(res.data);
      console.log(res.data);
    });
  };
  // console.log(articles);
  const deletePlace = (id) => {
    axios.delete(`http://localhost:8000/api/places/${id}`).then(displayPlaces);
  };

  const displayPlaceTypes = async () => {
    await axios.get("http://localhost:8000/api/place_types").then((res) => {
      setPlaceTypes(res.data);
      // console.log(res.data);
    });
  };

  return (
    <div>
      <Menu />
      
      <div className="container mt-5">
      <Link to={`/dashboard/places/add`} className="btn btn-primary mb-4">
        Ajouter un nouveau lieu
      </Link>
        <Table striped bordered hover className="text-center align-middle">
          <thead>
            <tr>
              <th>Nom du lieu</th>
              <th>Type du lieu</th>
              <th>Description du lieu</th>
              <th>Adresse du lieu</th>
              <th>Latitude du lieu</th>
              <th>Longitude du lieu</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {places.map((place) => (
              <tr key={place.id}>
                <td>{place.namePlace}</td>

                <td>{place.namePlaceType}</td>

                <td>{place.descriptionPlace}</td>
                <td>{place.adressPlace}</td>
                <td>{place.latitudePlace}</td>
                <td>{place.longitudePlace}</td>
                <td>
                  <img
                    src={`http://localhost:8000/storage/uploads/${place.imagePlace}`}
                    width="75px"
                  />
                </td>
                <td>
                  <Link
                    to={`/dashboard/places/edit/${place.id}`}
                    className="btn btn-success me-2"
                  >
                    Modifier
                  </Link>
                  <Button
                  className="m-1"
                    variant="danger"
                    onClick={() => {
                      deletePlace(place.id);
                    }}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
};

export default Places;
