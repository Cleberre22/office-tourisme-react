import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Logo from "../../../components/Logo";

const PlaceTypes = () => {
  const [placeTypes, setPlaceTypes] = useState([]);

  useEffect(() => {
    displayPlaceTypes();
  }, []); // Sans les crochets ça tourne en boucle

  const displayPlaceTypes = async () => {
    await axios.get("http://localhost:8000/api/place_types").then((res) => {
      setPlaceTypes(res.data);
      console.log(res.data);
    });
  };
  
  const deletePlaceType = (id) => {
    axios
      .delete(`http://localhost:8000/api/place_types/${id}`)
      .then(displayPlaceTypes);
  };

  return (
    <div>
      <Logo />
      <Menu />
      
      <div className="container mt-5">
      <Link to={`/dashboard/placeTypes/add`} className="btn btn-primary mb-4">
        Ajouter un nouveau type de lieu
      </Link>
        <Table striped bordered hover className="text-center align-middle">
          <thead>
            <tr>
              <th>Nom du type de lieu</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {placeTypes.map((placeType) => (
              <tr key={placeType.id}>
                <td>{placeType.namePlaceType}</td>
                <td>
                  <Link
                    to={`/dashboard/placeTypes/edit/${placeType.id}`}
                    className="btn btn-success me-2"
                  >
                    Modifier
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deletePlaceType(placeType.id);
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

export default PlaceTypes;
