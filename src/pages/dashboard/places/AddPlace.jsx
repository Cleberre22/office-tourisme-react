import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/Menu";

const AddPlace = () => {
  const navigate = useNavigate();

  const [namePlace, setNamePlace] = useState("");
  const [descriptionPlace, setDescriptionPlace] = useState("");
  const [imagePlace, setImagePlace] = useState("");
  const [adressPlace, setAdressPlace] = useState("");
  const [latitudePlace, setLatitudePlace] = useState("");
  const [longitudePlace, setLongitudePlace] = useState("");
  const [place_types_id, setPlace_types_id] = useState("");
  const [placeTypes, setPlaceTypes] = useState([]);
  const [validationError, setValidationError] = useState({});

  const changeHandler = (event) => {
    setImagePlace(event.target.files[0]);
  };

  const handleChange = (event) => {
    setPlace_types_id(event.target.value);
  };

  useEffect(() => {
    getPlaceTypes();
  }, []);
  //Méthode pour récupérer les clubs
  const getPlaceTypes = async () => {
    await axios.get("http://localhost:8000/api/place_types").then((res) => {
      setPlaceTypes(res.data);
    });
  };
console.log(placeTypes);
  //Fonction d'ajout de club
  const AddPlace = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("namePlace", namePlace);
    formData.append("descriptionPlace", descriptionPlace);
    formData.append("place_types_id", place_types_id);
    formData.append("imagePlace", imagePlace);
    formData.append("adressPlace", adressPlace);
    formData.append("latitudePlace", latitudePlace);
    formData.append("longitudePlace", longitudePlace);
    formData.append("place_types_id", place_types_id);

    await axios
      .post(`http://localhost:8000/api/places`, formData)
      .then(navigate("/dashboard/places"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Création d'un nouveau lieu</h4>
                <hr />
                <div className="form-wrapper">
                  {Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {Object.entries(validationError).map(
                              ([key, value]) => (
                                <li key={key}>{value}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  <Form onSubmit={AddPlace}>
                    <Row>
                      <Col>
                        <Form.Group controlId="placeType">
                          <Form.Label>Type de lieu</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            onChange={handleChange}
                          >
                            <option>Choisissez un type de lieu</option>
                            {placeTypes.map((placeType) => (
                              <option key={placeType.id} value={placeType.id}>
                                {placeType.namePlaceType}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Name">
                          <Form.Label>Nom du lieu</Form.Label>
                          <Form.Control
                            type="text"
                            value={namePlace}
                            onChange={(event) => {
                              setNamePlace(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Description">
                          <Form.Label>Description du lieu</Form.Label>
                          <Form.Control
                            type="text"
                            value={descriptionPlace}
                            onChange={(event) => {
                              setDescriptionPlace(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Adress">
                          <Form.Label>Adresse du lieu</Form.Label>
                          <Form.Control
                            type="text"
                            value={adressPlace}
                            onChange={(event) => {
                              setAdressPlace(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Latitude">
                          <Form.Label>Latitude du lieu</Form.Label>
                          <Form.Control
                            type="number"
                            value={latitudePlace}
                            onChange={(event) => {
                              setLatitudePlace(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Longitude">
                          <Form.Label>Longitude du lieu</Form.Label>
                          <Form.Control
                            type="number"
                            value={longitudePlace}
                            onChange={(event) => {
                              setLongitudePlace(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Image" className="mb-3">
                          <Form.Label>Image</Form.Label>
                          <Form.Control type="file" onChange={changeHandler} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      variant="primary"
                      className="mt-2"
                      size="lg"
                      block="block"
                      type="submit"
                    >
                      Créer le lieu
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
